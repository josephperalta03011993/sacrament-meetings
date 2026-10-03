"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createMeeting, type State } from "@/lib/actions";

const initialState: State = {};

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <Link
          href="/meetings"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to Meetings
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Create Meeting
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Add a new sacrament meeting.
        </p>
      </div>

      <form
        action={formAction}
        className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
      >
        {state.message && (
          <div
            aria-live="polite"
            className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
          >
            {state.message}
          </div>
        )}

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>

          <input
            id="date"
            name="date"
            type="date"
            required
            aria-describedby="date-error"
            className="mt-1 w-full rounded-lg border px-4 py-2"
          />

          <div
            id="date-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.date?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="meetingType"
            className="block text-sm font-medium text-gray-700"
          >
            Meeting Type
          </label>

          <select
            id="meetingType"
            name="meetingType"
            defaultValue=""
            required
            aria-describedby="meetingType-error"
            className="mt-1 w-full rounded-lg border px-4 py-2"
          >
            <option value="" disabled>
              Select meeting type
            </option>
            <option value="regular">Regular</option>
            <option value="testimony">Testimony</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
          </select>

          <div
            id="meetingType-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.meetingType?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="presiding"
            className="block text-sm font-medium text-gray-700"
          >
            Presiding Officer
          </label>

          <input
            id="presiding"
            name="presiding"
            type="text"
            required
            aria-describedby="presiding-error"
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="Enter presiding officer"
          />

          <div
            id="presiding-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.presiding?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="conducting"
            className="block text-sm font-medium text-gray-700"
          >
            Conducting Officer
          </label>

          <input
            id="conducting"
            name="conducting"
            type="text"
            required
            aria-describedby="conducting-error"
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="Enter conducting officer"
          />

          <div
            id="conducting-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.conducting?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="openingPrayer"
            className="block text-sm font-medium text-gray-700"
          >
            Opening Prayer
          </label>

          <input
            id="openingPrayer"
            name="openingPrayer"
            type="text"
            required
            aria-describedby="openingPrayer-error"
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="Enter prayer name"
          />

          <div
            id="openingPrayer-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.openingPrayer?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="closingPrayer"
            className="block text-sm font-medium text-gray-700"
          >
            Closing Prayer
          </label>

          <input
            id="closingPrayer"
            name="closingPrayer"
            type="text"
            required
            aria-describedby="closingPrayer-error"
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="Enter prayer name"
          />

          <div
            id="closingPrayer-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.closingPrayer?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t pt-5">
          <Link
            href="/meetings"
            className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Creating..." : "Create Meeting"}
          </button>
        </div>
      </form>
    </div>
  );
}