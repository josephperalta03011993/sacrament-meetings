"use client";

import Link from "next/link";

export default function MeetingsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Something went wrong
      </h2>

      <p className="mt-2 max-w-md text-gray-600">
        We couldn&apos;t load the meetings right now. Please try again.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}