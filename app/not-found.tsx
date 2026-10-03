import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        Meeting not found
      </h1>

      <p className="mt-2 text-gray-600">
        The meeting you are trying to access does not exist.
      </p>

      <Link
        href="/meetings"
        className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Back to Meetings
      </Link>
    </div>
  );
}