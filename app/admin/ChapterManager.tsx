"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Chapter = {
  chapter_id: string;
  chapter_name: string;
  province: string | null;
  contact_name: string | null;
  contact_email: string | null;
  instagram: string | null;
};
type Neighbournet = {
  neighbournet_id: string;
  neighbournet_name: string;
  chapter_id: string | null;
  fsa: string | null;
  neighbournet_contact: string | null;
  contact_email: string | null;
  instagram: string | null;
};

export default function ChapterManager() {
  const supabase = createClient();

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [nets, setNets] = useState<Neighbournet[]>([]);
  const [error, setError] = useState<string | null>(null);

  // new chapter form
  const [cName, setCName] = useState("");
  const [cProvince, setCProvince] = useState("");
  const [cContact, setCContact] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cInsta, setCInsta] = useState("");

  // new neighbournet form
  const [nName, setNName] = useState("");
  const [nChapter, setNChapter] = useState("");
  const [nFsa, setNFsa] = useState("");
  const [nContact, setNContact] = useState("");
  const [nEmail, setNEmail] = useState("");
  const [nInsta, setNInsta] = useState("");

  async function load() {
    const [ch, nn] = await Promise.all([
      supabase.from("chapters").select("chapter_id, chapter_name, province, contact_name, contact_email, instagram").order("chapter_name"),
      supabase.from("neighbournets").select("neighbournet_id, neighbournet_name, chapter_id, fsa, neighbournet_contact, contact_email, instagram").order("neighbournet_name"),
    ]);
    if (ch.error || nn.error) setError(ch.error?.message || nn.error?.message || "Load failed");
    else { setChapters(ch.data as Chapter[]); setNets(nn.data as Neighbournet[]); }
  }

  useEffect(() => { load(); }, []);

  async function addChapter() {
    setError(null);
    if (!cName.trim()) { setError("Chapter name is required."); return; }
    const { error } = await supabase.from("chapters").insert({
      chapter_name: cName.trim(),
      province: cProvince.trim() || null,
      contact_name: cContact.trim() || null,
      contact_email: cEmail.trim() || null,
      instagram: cInsta.trim() || null,
    });
    if (error) { setError(error.message); return; }
    setCName(""); setCProvince(""); setCContact(""); setCEmail(""); setCInsta("");
    load();
  }

  async function deleteChapter(id: string, name: string) {
    if (!confirm(`Delete chapter "${name}"? Members and neighbournets linked to it may be affected.`)) return;
    const { error } = await supabase.from("chapters").delete().eq("chapter_id", id);
    if (error) setError(error.message);
    else load();
  }

  async function addNet() {
    setError(null);
    if (!nName.trim()) { setError("Neighbournet name is required."); return; }
    if (!nChapter) { setError("Please choose a chapter for the neighbournet."); return; }
    const fsaClean = nFsa.trim().toUpperCase();
    if (fsaClean && !/^[A-Z]\d[A-Z]$/.test(fsaClean)) {
      setError("FSA must be 3 characters like L6Y."); return;
    }
    const { error } = await supabase.from("neighbournets").insert({
      neighbournet_name: nName.trim(),
      chapter_id: nChapter,
      fsa: fsaClean || null,
      neighbournet_contact: nContact.trim() || null,
      contact_email: nEmail.trim() || null,
      instagram: nInsta.trim() || null,
    });
    if (error) { setError(error.message); return; }
    setNName(""); setNChapter(""); setNFsa(""); setNContact(""); setNEmail(""); setNInsta("");
    load();
  }

  async function deleteNet(id: string, name: string) {
    if (!confirm(`Delete neighbournet "${name}"?`)) return;
    const { error } = await supabase.from("neighbournets").delete().eq("neighbournet_id", id);
    if (error) setError(error.message);
    else load();
  }

  const chapterName = (id: string | null) =>
    chapters.find((c) => c.chapter_id === id)?.chapter_name ?? "—";

  return (
    <div className="max-w-5xl mx-auto p-6 text-white border-t border-white/10 mt-4">
      <h2 className="text-2xl font-semibold mb-6">Chapters &amp; Neighbournets</h2>
      {error && <p className="text-red-400 mb-4">{error}</p>}

      {/* Add chapter */}
      <h3 className="text-lg font-medium text-[#2683EB] mb-2">Add a chapter</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4 flex flex-wrap gap-3 items-end">
        <Field label="Chapter name *"><input className={inp} value={cName} onChange={(e) => setCName(e.target.value)} /></Field>
        <Field label="Province"><input className={inp} value={cProvince} onChange={(e) => setCProvince(e.target.value)} /></Field>
        <Field label="Contact name"><input className={inp} value={cContact} onChange={(e) => setCContact(e.target.value)} /></Field>
        <Field label="Contact email"><input className={inp} value={cEmail} onChange={(e) => setCEmail(e.target.value)} /></Field>
        <Field label="Instagram"><input className={inp} value={cInsta} onChange={(e) => setCInsta(e.target.value)} /></Field>
        <button onClick={addChapter} className="cursor-pointer bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-2 font-medium">Add chapter</button>
      </div>

      {/* Chapters list */}
      <table className="w-full text-left border-collapse mb-10">
        <thead>
          <tr className="border-b border-white/20 text-white/60 text-sm">
            <th className="py-2 pr-4">Chapter</th><th className="py-2 pr-4">Province</th>
            <th className="py-2 pr-4">Contact</th><th className="py-2 pr-4">Email</th><th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((c) => (
            <tr key={c.chapter_id} className="border-b border-white/10">
              <td className="py-2 pr-4">{c.chapter_name}</td>
              <td className="py-2 pr-4">{c.province ?? "—"}</td>
              <td className="py-2 pr-4">{c.contact_name ?? "—"}</td>
              <td className="py-2 pr-4">{c.contact_email ?? "—"}</td>
              <td className="py-2">
                <button onClick={() => deleteChapter(c.chapter_id, c.chapter_name)}
                  className="cursor-pointer text-red-400 hover:text-red-300 text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add neighbournet */}
      <h3 className="text-lg font-medium text-[#2683EB] mb-2">Add a neighbournet</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4 flex flex-wrap gap-3 items-end">
        <Field label="Name *"><input className={inp} value={nName} onChange={(e) => setNName(e.target.value)} /></Field>
        <Field label="Chapter *">
          <select className={inp} value={nChapter} onChange={(e) => setNChapter(e.target.value)}>
            <option value="">Select…</option>
            {chapters.map((c) => <option key={c.chapter_id} value={c.chapter_id}>{c.chapter_name}</option>)}
          </select>
        </Field>
        <Field label="FSA"><input className={inp} placeholder="L6Y" value={nFsa} onChange={(e) => setNFsa(e.target.value)} /></Field>
        <Field label="Contact"><input className={inp} value={nContact} onChange={(e) => setNContact(e.target.value)} /></Field>
        <Field label="Contact email"><input className={inp} value={nEmail} onChange={(e) => setNEmail(e.target.value)} /></Field>
        <Field label="Instagram"><input className={inp} value={nInsta} onChange={(e) => setNInsta(e.target.value)} /></Field>
        <button onClick={addNet} className="cursor-pointer bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-2 font-medium">Add neighbournet</button>
      </div>

      {/* Neighbournets list */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/20 text-white/60 text-sm">
            <th className="py-2 pr-4">Neighbournet</th><th className="py-2 pr-4">Chapter</th>
            <th className="py-2 pr-4">FSA</th><th className="py-2 pr-4">Contact</th><th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {nets.map((n) => (
            <tr key={n.neighbournet_id} className="border-b border-white/10">
              <td className="py-2 pr-4">{n.neighbournet_name}</td>
              <td className="py-2 pr-4">{chapterName(n.chapter_id)}</td>
              <td className="py-2 pr-4">{n.fsa ?? "—"}</td>
              <td className="py-2 pr-4">{n.neighbournet_contact ?? "—"}</td>
              <td className="py-2">
                <button onClick={() => deleteNet(n.neighbournet_id, n.neighbournet_name)}
                  className="cursor-pointer text-red-400 hover:text-red-300 text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const inp = "bg-black/40 border border-white/20 rounded px-3 py-2";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-white/60 mb-1">{label}</label>
      {children}
    </div>
  );
}