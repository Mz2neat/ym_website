"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  }
  

  return (
    <div className="max-w-sm mx-auto mt-20 px-5 flex flex-col gap-3">
      <h1>Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleLogin(); }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleLogin(); }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </button>
    
    <p className="text-white/50 text-sm">
        <a href="/forgot-password" className="text-[#2683EB]">Forgot your password?</a>
      </p>

      </div>
  );
}