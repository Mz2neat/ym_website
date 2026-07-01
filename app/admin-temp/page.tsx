import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./logoutbutton";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <p>Signed in as {data.user.email}</p>
      <p>Admin tools will go here.</p>
      <LogoutButton />
    </div>
  );
}