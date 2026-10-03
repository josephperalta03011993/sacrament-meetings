import Link from "next/link";
import { deleteMeeting } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{meeting.date}</h2>

      <p className="mt-2">
        Meeting Type: {meeting.meetingType}
      </p>

      <p>
        Presiding: {meeting.presiding}
      </p>

      <p>
        Conducting: {meeting.conducting}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={`/meetings/${meeting.id}`}
          className="font-medium underline"
        >
          View Meeting
        </Link>

        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="font-medium text-indigo-600 hover:underline"
        >
          Edit
        </Link>

        <form action={deleteMeeting.bind(null, meeting.id)}>
          <button
            type="submit"
            className="font-medium text-red-600 hover:underline"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}