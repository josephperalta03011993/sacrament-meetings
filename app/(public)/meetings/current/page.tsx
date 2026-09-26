import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
  const meetings = await getMeetings();

  const currentMeeting = meetings[0];

  if (!currentMeeting) {
    return <p>No current meeting found.</p>;
  }

  redirect(`/meetings/${currentMeeting.id}`);
}