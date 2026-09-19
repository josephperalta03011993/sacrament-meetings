import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
  const meetings = getMeetings();

  const currentMeeting = meetings[0];

  if (!currentMeeting) {
    return <p>No current meeting found.</p>;
  }

  redirect(`/meetings/${currentMeeting.id}`);
}