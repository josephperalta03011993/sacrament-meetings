
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function LoginPage() {
  async function authenticate(formData: FormData) {
    "use server";

    try {
      await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        redirectTo: "/meetings/new",
      });
    } catch (error) {
      if (error instanceof AuthError) {
        redirect("/login?error=InvalidCredentials");
      }

      throw error;
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 p-8 shadow-sm">
      <h1 className="mb-2 text-2xl font-bold">Bishopric Sign In</h1>
      <p className="mb-6 text-sm text-gray-600">
        Sign in to manage sacrament meeting programs.
      </p>

      <form action={authenticate} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="mb-1 block text-sm font-medium"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-sm text-red-600" aria-live="polite">
        {/* The message appears when the URL contains an invalid-credentials error. */}
      </p>
    </div>
  );
}   