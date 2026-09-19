import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        {meeting.date}
      </h2>

      <p className="mt-2">
        Meeting Type: {meeting.meetingType}
      </p>

      <p>
        Presiding: {meeting.presiding}
      </p>

      <p>
        Conducting: {meeting.conducting}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 inline-block font-medium underline"
      >
        View Meeting
      </Link>
    </article>
  );
}