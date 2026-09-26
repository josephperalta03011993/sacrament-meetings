// Week 03 Assignment update to connect to DB
import { NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return NextResponse.json(
      { error: "Invalid meeting ID" },
      { status: 400 }
    );
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    return NextResponse.json(
      { error: "Meeting not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(meeting);
}

// Week 02 old code
// import { getMeetingById } from "@/lib/meetings-db";

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;
//   const meetingId = Number(id);

//   if (Number.isNaN(meetingId)) {
//     return Response.json(
//       { error: "Invalid meeting ID" },
//       { status: 400 }
//     );
//   }

//   const meeting = getMeetingById(meetingId);

//   if (!meeting) {
//     return Response.json(
//       { error: "Meeting not found" },
//       { status: 404 }
//     );
//   }

//   return Response.json(meeting);
// }