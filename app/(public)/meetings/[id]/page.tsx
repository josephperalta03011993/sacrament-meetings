import { notFound } from "next/navigation";
import { headers } from "next/headers";
import MeetingDetail from "@/components/MeetingDetail";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingPage({ params }: MeetingPageProps) {
  const { id } = await params;

  const headersList = await headers();
  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocol}://${host}/api/meetings/${id}`,
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