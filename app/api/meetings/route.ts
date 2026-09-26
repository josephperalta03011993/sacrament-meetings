// Week 03 Assignment update to connect to DB
import { NextRequest, NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query") || undefined;
  const page = Number(searchParams.get("page")) || 1;
  const date = searchParams.get("date") || undefined;

  const meetings = await getMeetings(query, page, date);

  return NextResponse.json(meetings);
}

// Week 02 old code
// import { getMeetings } from "@/lib/meetings-db";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const date = searchParams.get("date");

//   const meetings = getMeetings();

//   const filteredMeetings = date
//     ? meetings.filter((meeting) => meeting.date === date)
//     : meetings;

//     return Response.json(filteredMeetings);
// }