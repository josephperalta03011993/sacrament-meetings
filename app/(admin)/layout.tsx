
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between border-b pb-4">
        <p className="text-sm text-gray-600">
          Signed in as {session.user.name ?? "Bishopric Admin"}
        </p>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button
            type="submit"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Sign Out
          </button>
        </form>
      </div>

      {children}
    </>
  );
}