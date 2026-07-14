"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleUpdate() {
    setError(null);
    if (password.length < 12) { setError("Password must be at least 12 characters."); return; }
    if (!/[A-Z]/.test(password)) { setError("Password must include at least one capital letter."); return; }
    if (password !== confirm) { setError("Passwords don't match."); return; }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setDone(true);
      setLoading(false);
      setTimeout(() => router.push("/login"), 2000);
    }
  }

  if (done) {
    return (
      <div className="max-w-sm mx-auto mt-24 text-white text-center px-6">
        <h1 className="text-xl font-semibold mb-3">Password updated</h1>
        <p className="text-white/70 text-sm">Redirecting you to log in…</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-24 flex flex-col gap-3 text-white px-6">
      <h1 className="text-xl font-semibold">Set a new password</h1>
      <input
        type="password"
        placeholder="New password (12+ characters, 1 capital)"
        className="bg-black/40 border border-white/20 rounded px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm new password"
        className="bg-black/40 border border-white/20 rounded px-3 py-2"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleUpdate(); }}
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="cursor-pointer bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-2 font-medium disabled:opacity-50"
      >
        {loading ? "Updating…" : "Update password"}
      </button>
    </div>
  );
}