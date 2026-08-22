"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Chapter = { chapter_id: string; chapter_name: string };
type Account = {
  id: string;
  email: string;
  access_level: string | null; // null = unknown
  chapter_ids: string[];
};

export default function AdminManager() {
  const supabase = createClient();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [addChapterFor, setAddChapterFor] = useState<Record<string, string>>({});
  const [myId, setMyId] = useState<string | null>(null);
  
  async function load() {
    setError(null);
    const { data: userData } = await supabase.auth.getUser();
    setMyId(userData.user?.id ?? null);

    const [acc, ch] = await Promise.all([
      supabase.rpc("list_accounts"),
      supabase.from("chapters").select("chapter_id, chapter_name").order("chapter_name"),
    ]);
    if (acc.error) setError(acc.error.message);
    else setAccounts(acc.data as Account[]);
    if (ch.error) setError(ch.error.message);
    else setChapters(ch.data as Chapter[]);
  }

  useEffect(() => { load(); }, []);

  const chapterName = (id: string) =>
    chapters.find((c) => c.chapter_id === id)?.chapter_name ?? id;

  // set someone's level: 'national', 'chapter', or null (revoke completely)
  async function setLevel(id: string, level: string | null) {
    setBusy(id); setError(null);

    if (level === null) {
      // remove all access → unknown
      await supabase.from("admin_chapters").delete().eq("admin_id", id);
      const { error } = await supabase.from("admins").delete().eq("id", id);
      if (error) setError(error.message);
    } else {
      // upsert their admins row to the chosen level
      const { error } = await supabase.from("admins").upsert({ id, access_level: level });
      if (error) setError(error.message);
      // national doesn't need chapter rows; optionally clear them
      if (level === "national") {
        await supabase.from("admin_chapters").delete().eq("admin_id", id);
      }
    }
    await load();
    setBusy(null);
  }

  async function addChapter(id: string) {
    const chapterId = addChapterFor[id];
    if (!chapterId) return;
    setBusy(id); setError(null);
    const { error } = await supabase.from("admin_chapters").insert({ admin_id: id, chapter_id: chapterId });
    if (error) setError(error.message);
    setAddChapterFor((p) => ({ ...p, [id]: "" }));
    await load();
    setBusy(null);
  }

  async function removeChapter(id: string, chapterId: string) {
    setBusy(id); setError(null);
    const { error } = await supabase.from("admin_chapters")
      .delete().eq("admin_id", id).eq("chapter_id", chapterId);
    if (error) setError(error.message);
    await load();
    setBusy(null);
  }

  const levelLabel = (l: string | null) => l ?? "unknown";

  return (
    <div className="max-w-5xl mx-auto p-6 text-white border-t border-white/10 mt-4">
      <h2 className="text-2xl font-semibold mb-6">Admin Access Management</h2>
      {error && <p className="text-red-400 mb-4">{error}</p>}

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/20 text-white/60 text-sm">
            <th className="py-2 pr-4">Email</th>
            <th className="py-2 pr-4">Level</th>
            <th className="py-2 pr-4">Chapters</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id} className="border-b border-white/10 align-top">
              <td className="py-3 pr-4">{acc.email}</td>
              <td className="py-3 pr-4">
                <span className="px-2 py-0.5 rounded bg-white/10 text-xs uppercase">
                  {levelLabel(acc.access_level)}
                </span>
              </td>
              <td className="py-3 pr-4">
                {acc.access_level === "national" ? (
                  <span className="text-white/50 text-sm">All (national)</span>
                ) : acc.chapter_ids.length === 0 ? (
                  <span className="text-white/40 text-sm">—</span>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {acc.chapter_ids.map((cid) => (
                      <span key={cid} className="px-2 py-0.5 rounded bg-white/10 text-xs flex items-center gap-1">
                        {chapterName(cid)}
                        <button onClick={() => removeChapter(acc.id, cid)}
                          className="cursor-pointer text-red-400 hover:text-red-300">×</button>
                      </span>
                    ))}
                  </div>
                )}
                {/* add a chapter (only relevant for chapter-level) */}
                {acc.access_level === "chapter" && (
                  <div className="mt-2 flex gap-2">
                    <select
                      className="bg-black/40 border border-white/20 rounded px-2 py-1 text-sm"
                      value={addChapterFor[acc.id] ?? ""}
                      onChange={(e) => setAddChapterFor((p) => ({ ...p, [acc.id]: e.target.value }))}>
                      <option value="">Add chapter…</option>
                      {chapters
                        .filter((c) => !acc.chapter_ids.includes(c.chapter_id))
                        .map((c) => <option key={c.chapter_id} value={c.chapter_id}>{c.chapter_name}</option>)}
                    </select>
                    <button onClick={() => addChapter(acc.id)}
                      className="cursor-pointer text-[#2683EB] hover:text-blue-300 text-sm">Add</button>
                  </div>
                )}
              </td>
              <td className="py-3">
                <div className="flex flex-col gap-1">
                  <button disabled={busy === acc.id} onClick={() => setLevel(acc.id, "national")}
                    className="cursor-pointer text-left text-sm text-white/70 hover:text-white disabled:opacity-40">
                    Make national
                  </button>
                  <button disabled={busy === acc.id} onClick={() => setLevel(acc.id, "chapter")}
                    className="cursor-pointer text-left text-sm text-white/70 hover:text-white disabled:opacity-40">
                    Make chapter admin
                  </button>
                  <button disabled={busy === acc.id} onClick={() => setLevel(acc.id, null)}
                    className="cursor-pointer text-left text-sm text-red-400 hover:text-red-300 disabled:opacity-40">
                    Revoke access
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}