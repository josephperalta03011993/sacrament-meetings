import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingPage({ params }: MeetingPageProps) {
  const { id } = await params;

  const response = await fetch(
    `http://localhost:3000/api/meetings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    notFound();
  }

  const meeting = await response.json();

  return <MeetingDetail meeting={meeting} />;
}