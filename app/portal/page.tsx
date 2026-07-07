import Link from "next/link";

export default function PortalPage() {
  return (
    <div className="max-w-sm mx-auto mt-24 flex flex-col gap-4 text-white text-center px-6">
      <h1 className="text-xl font-semibold">Admin Access</h1>
      <p className="text-white/60 text-sm">Log in or create an account.</p>
      <Link
        href="/login"
        className="bg-[#2683EB] hover:bg-[#1f6fd0] rounded px-4 py-3 font-medium"
      >
        Log in
      </Link>
      <Link
        href="/signup"
        className="border border-white/20 hover:bg-white/10 rounded px-4 py-3 font-medium"
      >
        Sign up
      </Link>
    </div>
  );
}