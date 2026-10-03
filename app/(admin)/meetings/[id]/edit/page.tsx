import Link from "next/link";
import { notFound } from "next/navigation";
import { getMeetingById } from "@/lib/meetings-db";
import EditMeetingForm from "./EditMeetingForm";

export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <Link
          href={`/meetings/${meeting.id}`}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to Meeting
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Edit Meeting
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Update the sacrament meeting information.
        </p>
      </div>

      <EditMeetingForm meeting={meeting} />
    </div>
  );
}