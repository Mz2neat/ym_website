"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Chapter = { chapter_id: string; chapter_name: string };
type Neighbournet = { neighbournet_id: string; neighbournet_name: string; chapter_id: string };
type Member = {
  member_id: string;
  member_number: number;
  full_name: string;
  email: string | null;
  membership_level: string;
  role: string | null;
  date_joined: string;
  chapter_id: string | null;
  neighbournet_id: string | null;
};

const LEVELS = ["associate", "learning_associate", "member", "senior_member"];

export default function MembersManager() {
  const supabase = createClient();

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [neighbournets, setNeighbournets] = useState<Neighbournet[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [filterChapter, setFilterChapter] = useState(""); // "" = all chapters
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // new-member form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("member");
  const [role, setRole] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [formChapter, setFormChapter] = useState("");
  const [formNet, setFormNet] = useState("");

  async function loadAll() {
    setLoading(true);
    const [ch, nets, mem] = await Promise.all([
      supabase.from("chapters").select("chapter_id, chapter_name").order("chapter_name"),
      supabase.from("neighbournets").select("neighbournet_id, neighbournet_name, chapter_id"),
      supabase
        .from("members")
        .select("member_id, member_number, full_name, email, membership_level, role, date_joined, chapter_id, neighbournet_id")
        .order("full_name"),
    ]);
    if (ch.error || nets.error || mem.error) {
      setError(ch.error?.message || nets.error?.message || mem.error?.message || "Load failed");
    } else {
      setChapters(ch.data as Chapter[]);
      setNeighbournets(nets.data as Neighbournet[]);
      setMembers(mem.data as Member[]);
    }
    setLoading(false);
  }

  useEffect(() => { loadAll(); }, []);

  async function addMember() {
    setError(null);
    if (!fullName || !dateJoined || !formChapter) {
      setError("Name, chapter, and join date are required.");
      return;
    }
    const { error } = await supabase.from("members").insert({
      full_name: fullName,
      email: email || null,
      membership_level: level,
      role: role || null,
      date_joined: dateJoined,
      chapter_id: formChapter,
      neighbournet_id: formNet || null,
    });
    if (error) { setError(error.message); return; }
    setFullName(""); setEmail(""); setLevel("member"); setRole("");
    setDateJoined(""); setFormChapter(""); setFormNet("");
    loadAll();
  }

  async function deleteMember(id: string, name: string) {
    if (!confirm(`Delete ${name}? This cannot be undone.`)) return;
    const { error } = await supabase.from("members").delete().eq("member_id", id);
    if (error) setError(error.message);
    else loadAll();
  }

  // helpers to turn an id into a name for display
  const chapterName = (id: string | null) =>
    chapters.find((c) => c.chapter_id === id)?.chapter_name ?? "—";
  const netName = (id: string | null) =>
    neighbournets.find((n) => n.neighbournet_id === id)?.neighbournet_name ?? null;

  // members shown = filtered by chapter (or all)
  const shown = filterChapter
    ? members.filter((m) => m.chapter_id === filterChapter)
    : members;

  // group the shown members by neighbournet name (null → "No neighbournet")
  const groups: Record<string, Member[]> = {};
  for (const m of shown) {
    const key = netName(m.neighbournet_id) ?? "No neighbournet";
    (groups[key] ||= []).push(m);
  }

  // neighbournets available in the add-form, filtered to the chosen chapter
  const formNets = neighbournets.filter((n) => n.chapter_id === formChapter);

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-semibold mb-6">Members</h2>

      {/* Add member form */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8 flex flex-wrap gap-3 items-end">
        <Field label="Full name">
          <input className={inputCls} value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </Field>
        <Field label="Email">
          <input className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="Chapter">
          <select className={inputCls} value={formChapter}
            onChange={(e) => { setFormChapter(e.target.value); setFormNet(""); }}>
            <option value="">Select…</option>
            {chapters.map((c) => (
              <option key={c.chapter_id} value={c.chapter_id}>{c.chapter_name}</option>
            ))}
          </select>
        </Field>
        <Field label="Neighbournet">
          <select className={inputCls} value={formNet}
            onChange={(e) => setFormNet(e.target.value)} disabled={!formChapter}>
            <option value="">{formChapter ? "None" : "Pick chapter first"}</option>
            {formNets.map((n) => (
              <option key={n.neighbournet_id} value={n.neighbournet_id}>{n.neighbournet_name}</option>
            ))}
          </select>
        </Field>
        <Field label="Level">
          <select className={inputCls} value={level} onChange={(e) => setLevel(e.target.value)}>
            {LEVELS.map((l) => <option key={l} value={l}>{l.replace("_", " ")}</option>)}
          </select>
        </Field>
        <Field label="Role">
          <input className={inputCls} placeholder="e.g. coordinator" value={role} onChange={(e) => setRole(e.target.value)} />
        </Field>
        <Field label="Date joined">
          <input type="date" className={inputCls} value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} />
        </Field>
        <button onClick={addMember} className="bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-2 font-medium">
          Add member
        </button>
      </div>

      {/* Chapter filter */}
      <div className="mb-6 flex items-center gap-3">
        <label className="text-sm text-white/60">Filter by chapter:</label>
        <select className={inputCls} value={filterChapter} onChange={(e) => setFilterChapter(e.target.value)}>
          <option value="">All chapters</option>
          {chapters.map((c) => (
            <option key={c.chapter_id} value={c.chapter_id}>{c.chapter_name}</option>
          ))}
        </select>
      </div>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      {loading ? (
        <p className="text-white/60">Loading…</p>
      ) : shown.length === 0 ? (
        <p className="text-white/60">No members to show.</p>
      ) : (
        Object.entries(groups).map(([netLabel, list]) => (
          <div key={netLabel} className="mb-8">
            <h3 className="text-lg font-medium text-[#2683EB] mb-2">
              {netLabel}
              {!filterChapter && <span className="text-white/40 text-sm ml-2">
                ({chapterName(list[0].chapter_id)})
              </span>}
            </h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-white/60 text-sm">
                  <th className="py-2 pr-4">ID</th>
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Email</th>
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Role</th>
                  <th className="py-2 pr-4">Joined</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {list.map((m) => (
                  <tr key={m.member_id} className="border-b border-white/10">
                    <td className="py-2 pr-4">{m.member_number}</td>
                    <td className="py-2 pr-4">{m.full_name}</td>
                    <td className="py-2 pr-4">{m.email ?? "—"}</td>
                    <td className="py-2 pr-4">{m.membership_level.replace("_", " ")}</td>
                    <td className="py-2 pr-4">{m.role ?? "—"}</td>
                    <td className="py-2 pr-4">{m.date_joined}</td>
                    <td className="py-2">
                      <button onClick={() => deleteMember(m.member_id, m.full_name)}
                        className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}

const inputCls = "bg-black/40 border border-white/20 rounded px-3 py-2";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-white/60 mb-1">{label}</label>
      {children}
    </div>
  );
}