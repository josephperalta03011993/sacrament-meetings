import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";

export default async function MeetingsPage() {
  const headersList = await headers();
  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocol}://${host}/api/meetings`,
    {
      cache: "no-store",
    }
  );

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <div>
      <h1 className="text-3xl font-bold">Sacrament Meetings</h1>

      <div className="mt-6 space-y-4">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}