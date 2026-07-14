"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleReset() {
    setError(null);
    if (!email.trim()) { setError("Email is required."); return; }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSent(true);
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="max-w-sm mx-auto mt-24 text-white text-center px-6">
        <h1 className="text-xl font-semibold mb-3">Check your email</h1>
        <p className="text-white/70 text-sm">
          If an account exists for {email}, we&apos;ve sent a password reset link.
          Click it to set a new password.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-24 flex flex-col gap-3 text-white px-6">
      <h1 className="text-xl font-semibold">Reset your password</h1>
      <p className="text-white/60 text-sm">Enter your email and we&apos;ll send a reset link.</p>
      <input
        type="email"
        placeholder="Email"
        className="bg-black/40 border border-white/20 rounded px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleReset(); }}    
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        onClick={handleReset}
        disabled={loading}
        className="cursor-pointer bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-2 font-medium disabled:opacity-50"
      >
        {loading ? "Sending…" : "Send reset link"}
      </button>
      <p className="text-white/50 text-sm">
        Remembered it? <a href="/login" className="text-[#2683EB]">Log in</a>
      </p>
    </div>
  );
}