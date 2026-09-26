import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <Link href="/" className="text-xl font-bold">
            Sacrament Meeting Planner
          </Link>

          <p className="text-sm text-gray-600">
            Bagong Silang 1st Ward
          </p>
        </div>

        <nav>
          <Link
            href="/meetings"
            className="font-medium hover:underline"
          >
            Meetings
          </Link>
        </nav>
      </div>
    </header>
  );
}