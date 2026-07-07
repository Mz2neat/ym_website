import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./logoutbutton";
import MembersManager from "./MembersManager";
import ChapterManager from "./ChapterManager";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: adminRow } = await supabase
    .from("admins")
    .select("access_level")
    .eq("id", data.user.id)
    .single();

  const accessLevel = adminRow?.access_level ?? "unknown";
  const isNational = accessLevel === "national";

  return (
    <div className="text-white">
      <div className="max-w-5xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <p className="text-white/60 text-sm mt-1">
            Signed in as {data.user.email}
            <span className="ml-2 px-2 py-0.5 rounded bg-white/10 text-xs uppercase tracking-wide">
              {accessLevel}
            </span>
          </p>
        </div>
        <LogoutButton />
      </div>

      <MembersManager />

      {isNational && <ChapterManager />}
    </div>
  );
}