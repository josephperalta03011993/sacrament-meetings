import Link from "next/link";

export default function MeetingNotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Meeting not found
      </h2>

      <p className="mt-2 text-gray-600">
        The meeting you are trying to edit does not exist.
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