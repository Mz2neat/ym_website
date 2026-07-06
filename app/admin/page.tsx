"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Chapter = { chapter_id: string; chapter_name: string };
type Neighbournet = { neighbournet_id: string; neighbournet_name: string; chapter_id: string };
type Member = {
  member_id: string;
  member_number: number;
  first_name: string | null;
  last_name: string | null;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  instagram: string | null;
  membership_level: string;
  role: string | null;
  date_joined: string | null;
  chapter_id: string | null;
  neighbournet_id: string | null;
};

const LEVELS = ["associate", "learning_associate", "member", "senior_member"];

export default function MembersManager() {
  const supabase = createClient();

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [neighbournets, setNeighbournets] = useState<Neighbournet[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [filterChapter, setFilterChapter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 const [editingId, setEditingId] = useState<string | null>(null);
 const [editValues, setEditValues] = useState<Partial<Member>>({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("member");
  const [role, setRole] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [formChapter, setFormChapter] = useState("");
  const [formNet, setFormNet] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");

  async function loadAll() {
    setLoading(true);
    const [ch, nets, mem] = await Promise.all([
      supabase.from("chapters").select("chapter_id, chapter_name").order("chapter_name"),
      supabase.from("neighbournets").select("neighbournet_id, neighbournet_name, chapter_id"),
      supabase
        .from("members")
        .select("member_id, member_number, first_name, last_name, full_name, email, phone, instagram, membership_level, role, date_joined, chapter_id, neighbournet_id")
        .order("last_name"),
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

    // specific, field-by-field validation
    if (!firstName.trim()) { setError("First name is required."); return; }
    if (!lastName.trim()) { setError("Last name is required."); return; }
    if (!email.trim()) { setError("Email is required."); return; }
    if (!email.includes("@")) { setError("That email doesn't look valid."); return; }
    if (!phone.trim()) { setError("Phone number is required."); return; }
    if (!formChapter) { setError("Please select a chapter."); return; }

    const full = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ");

    const { error } = await supabase.from("members").insert({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      full_name: full,
      email: email.trim(),
      phone: phone.trim(),
      instagram: instagram.trim() || null,
      membership_level: level,
      role: role.trim() || null,
      date_joined: dateJoined || null,
      chapter_id: formChapter,
      neighbournet_id: formNet || null,
    });

    if (error) { setError(error.message); return; }

    setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setInstagram("");
    setLevel("member"); setRole(""); setDateJoined(""); setFormChapter(""); setFormNet("");
    loadAll();
  }

    
  

  async function deleteMember(id: string, name: string) {
    if (!confirm(`Delete ${name}? This cannot be undone.`)) return;
    const { error } = await supabase.from("members").delete().eq("member_id", id);
    if (error) setError(error.message);
    else loadAll();
  }
function startEdit(m: Member) {
    setEditingId(m.member_id);
    setEditValues({
      first_name: m.first_name,
      last_name: m.last_name,
      email: m.email,
      phone: m.phone,
      instagram: m.instagram,
      membership_level: m.membership_level,
      role: m.role,
      date_joined: m.date_joined,
      chapter_id: m.chapter_id,
      neighbournet_id: m.neighbournet_id,
    });
    setError(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditValues({});
  }

  async function saveEdit(id: string) {
    setError(null);
    const v = editValues;

    if (!v.first_name?.trim()) { setError("First name is required."); return; }
    if (!v.last_name?.trim()) { setError("Last name is required."); return; }
    if (!v.email?.trim()) { setError("Email is required."); return; }
    if (!v.phone?.trim()) { setError("Phone is required."); return; }
    if (!v.chapter_id) { setError("Chapter is required."); return; }

    const full = [v.first_name.trim(), v.last_name?.trim()].filter(Boolean).join(" ");

    const { error } = await supabase.from("members").update({
      first_name: v.first_name.trim(),
      last_name: v.last_name?.trim() || null,
      full_name: full,
      email: v.email.trim(),
      phone: v.phone?.trim() || null,
      instagram: v.instagram?.trim() || null,
      membership_level: v.membership_level,
      role: v.role?.trim() || null,
      date_joined: v.date_joined || null,
      chapter_id: v.chapter_id,
      neighbournet_id: v.neighbournet_id || null,
    }).eq("member_id", id);

    if (error) { setError(error.message); return; }
    setEditingId(null);
    setEditValues({});
    loadAll();
  }

  // helper to update one field in the edit form
  function setEdit(field: keyof Member, value: string) {
    setEditValues((prev) => ({ ...prev, [field]: value }));
  }
  const chapterName = (id: string | null) =>
    chapters.find((c) => c.chapter_id === id)?.chapter_name ?? "—";
  const netName = (id: string | null) =>
    neighbournets.find((n) => n.neighbournet_id === id)?.neighbournet_name ?? null;

  const shown = filterChapter
    ? members.filter((m) => m.chapter_id === filterChapter)
    : members;

  const groups: Record<string, Member[]> = {};
  for (const m of shown) {
    const key = netName(m.neighbournet_id) ?? "No neighbournet";
    (groups[key] ||= []).push(m);
  }

  const formNets = neighbournets.filter((n) => n.chapter_id === formChapter);

  const displayName = (m: Member) =>
    m.full_name || [m.first_name, m.last_name].filter(Boolean).join(" ") || "—";

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-semibold mb-6">Members</h2>

      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8 flex flex-wrap gap-3 items-end">
       <Field label="First name *">
          <input className={inputCls} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Field>
        <Field label="Last name *">
          <input className={inputCls} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Field>
        <Field label="Email *">
          <input className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="Phone *">
          <input className={inputCls} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <Field label="Instagram">
          <input className={inputCls} placeholder="@handle" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
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
        <Field label="Date joined (optional)">
          <input type="date" className={inputCls} value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} />
        </Field>
        <button onClick={addMember} className="bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-2 font-medium">
          Add member
        </button>
      </div>

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
                   <th className="py-2 pr-4">Phone</th>
                  <th className="py-2 pr-4">Instagram</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {list.map((m) => {
                  const editing = editingId === m.member_id;
                  // neighbournets available for the chapter currently chosen in the edit row
                  const rowNets = neighbournets.filter(
                    (n) => n.chapter_id === (editing ? editValues.chapter_id : m.chapter_id)
                  );
                  return (
                    <tr key={m.member_id} className="border-b border-white/10">
                      <td className="py-2 pr-4">{m.member_number}</td>

                      {editing ? (
                        <>
                          <td className="py-2 pr-4">
                            <input className={smallInput} value={editValues.first_name ?? ""}
                              onChange={(e) => setEdit("first_name", e.target.value)} placeholder="First" />
                            <input className={smallInput + " mt-1"} value={editValues.last_name ?? ""}
                              onChange={(e) => setEdit("last_name", e.target.value)} placeholder="Last" />
                          </td>
                          <td className="py-2 pr-4">
                            <input className={smallInput} value={editValues.email ?? ""}
                              onChange={(e) => setEdit("email", e.target.value)} />
                          </td>
                          <td className="py-2 pr-4">
                            <select className={smallInput} value={editValues.membership_level ?? "member"}
                              onChange={(e) => setEdit("membership_level", e.target.value)}>
                              {LEVELS.map((l) => <option key={l} value={l}>{l.replace("_", " ")}</option>)}
                            </select>
                          </td>
                          <td className="py-2 pr-4">
                            <input className={smallInput} value={editValues.role ?? ""}
                              onChange={(e) => setEdit("role", e.target.value)} />
                          </td>
                          <td className="py-2 pr-4">
                            <input type="date" className={smallInput} value={editValues.date_joined ?? ""}
                              onChange={(e) => setEdit("date_joined", e.target.value)} />
                          </td>
                          <td className="py-2 pr-4">
                            <input className={smallInput} value={editValues.phone ?? ""}
                              onChange={(e) => setEdit("phone", e.target.value)} />
                          </td>
                          <td className="py-2 pr-4">
                            <input className={smallInput} value={editValues.instagram ?? ""}
                              onChange={(e) => setEdit("instagram", e.target.value)} />
                          </td>
                          <td className="py-2 whitespace-nowrap">
                            <button onClick={() => saveEdit(m.member_id)}
                              className="text-green-400 hover:text-green-300 text-sm mr-3">Save</button>
                            <button onClick={cancelEdit}
                              className="text-white/50 hover:text-white/80 text-sm">Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="py-2 pr-4">{displayName(m)}</td>
                          <td className="py-2 pr-4">{m.email ?? "—"}</td>
                          <td className="py-2 pr-4">{m.membership_level.replace("_", " ")}</td>
                          <td className="py-2 pr-4">{m.role ?? "—"}</td>
                          <td className="py-2 pr-4">{m.date_joined ?? "NA"}</td>
                          <td className="py-2 pr-4">{m.phone ?? "—"}</td>
                          <td className="py-2 pr-4">{m.instagram ?? "—"}</td>
                          <td className="py-2 whitespace-nowrap">
                            <button onClick={() => startEdit(m)}
                              className="text-[#2683EB] hover:text-blue-300 text-sm mr-3">Edit</button>
                            <button onClick={() => deleteMember(m.member_id, displayName(m))}
                              className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
const inputCls = "bg-black/40 border border-white/20 rounded px-3 py-2";

const smallInput = "bg-black/40 border border-white/20 rounded px-2 py-1 text-sm w-full";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-white/60 mb-1">{label}</label>
      {children}
    </div>
  );
}