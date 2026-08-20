"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    setError(null);

    if (!email.trim()) { setError("Email is required."); return; }
    if (!email.includes("@")) { setError("That email doesn't look valid."); return; }

    if (password.length < 12) {
      setError("Password must be at least 12 characters."); return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must include at least one capital letter."); return;
    }
    if (password !== confirm) {
      setError("Passwords don't match."); return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({ email: email.trim(), password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setDone(true);
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="max-w-sm mx-auto mt-24 text-white text-center px-6">
        <h1 className="text-xl font-semibold mb-3">Account created</h1>
        <p className="text-white/70 text-sm">
          Your account has been created, but a national admin still needs to grant
          you access before you can use the dashboard. Please check your email to
          confirm your address, then contact your coordinator.
        </p>
      </div>
    );
  }
  

  return (
    <div className="max-w-sm mx-auto mt-24 flex flex-col gap-3 text-white px-6">
      <h1 className="text-xl font-semibold">Create an account</h1>
      <input
        type="email"
        placeholder="Email"
        className="bg-black/40 border border-white/20 rounded px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password (12+ characters, 1 capital)"
        className="bg-black/40 border border-white/20 rounded px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ul className="text-xs space-y-1">
        <Rule ok={password.length >= 12}>At least 12 characters</Rule>
        <Rule ok={/[A-Z]/.test(password)}>At least one capital letter</Rule>
      </ul>
      <input
        type="password"
        placeholder="Confirm password"
        className="bg-black/40 border border-white/20 rounded px-3 py-2"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        onClick={handleSignup}
        disabled={loading}
        className="cursor-pointer bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-2 font-medium disabled:opacity-50"
      >
        {loading ? "Creating…" : "Sign up"}
      </button>
      <p className="text-white/50 text-sm">
        Already have an account? <a href="/login" className="text-[#2683EB]">Log in</a>
      </p>
    </div>
    
  );
}
 function Rule({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className={ok ? "text-green-400" : "text-white/80"}>
      {ok ? "✓" : "○"} {children}
    </li>
  );
}