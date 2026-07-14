"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="cursor-pointer bg-white/10 hover:bg-white/20 text-white text-sm rounded px-4 py-2 transition-colors"
    >
      Log out
    </button>
  );
}