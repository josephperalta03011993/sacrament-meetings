// Week 03 Assignment update to connect to DB
import { neon } from "@neondatabase/serverless";
import type { SacramentMeeting } from "./types";

const sql = neon(process.env.DATABASE_URL!);

const ITEMS_PER_PAGE = 5;

export async function getMeetings(
  query = "",
  currentPage = 1,
  date?: string
): Promise<SacramentMeeting[]> {
  const searchTerm = `%${query}%`;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  if (date) {
    const rows = await sql`
      SELECT
        id,
        TO_CHAR(date, 'YYYY-MM-DD') AS "date",
        meeting_type AS "meetingType",
        presiding,
        conducting,
        announcements,
        opening_hymn AS "openingHymn",
        opening_prayer AS "openingPrayer",
        ward_business AS "wardBusiness",
        stake_business AS "stakeBusiness",
        sacrament_hymn AS "sacramentHymn",
        speakers,
        closing_hymn AS "closingHymn",
        closing_prayer AS "closingPrayer"
      FROM meetings
      WHERE date = ${date}
      ORDER BY date DESC
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset}
    `;

    return rows as unknown as SacramentMeeting[];
  }

  const rows = await sql`
    SELECT
      id,
      TO_CHAR(date, 'YYYY-MM-DD') AS "date",
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE
      presiding ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
    ORDER BY date DESC
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows as unknown as SacramentMeeting[];
}

export async function getMeetingsTotalPages(
  query = ""
): Promise<number> {
  const searchTerm = `%${query}%`;

  const rows = await sql`
    SELECT COUNT(*)::int AS count
    FROM meetings
    WHERE
      presiding ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
  `;

  return Math.ceil(rows[0].count / ITEMS_PER_PAGE);
}

export async function getMeetingById(
  id: number
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT
      id,
      TO_CHAR(date, 'YYYY-MM-DD') AS "date",
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE id = ${id}
  `;

  return (rows[0] as unknown as SacramentMeeting) ?? null;
}

// Mutation stubs — will be wired to the database in Week 04
export async function addMeeting(
  data: Omit<SacramentMeeting, "id">
): Promise<SacramentMeeting> {
  throw new Error("addMeeting: database implementation coming in Week 04");
}

export async function updateMeeting(
  id: number,
  updates: Partial<SacramentMeeting>
): Promise<SacramentMeeting | null> {
  throw new Error(
    "updateMeeting: database implementation coming in Week 04"
  );
}

export async function deleteMeeting(id: number): Promise<boolean> {
  throw new Error(
    "deleteMeeting: database implementation coming in Week 04"
  );
}

// Old code from week 02 assignment
// import { SacramentMeeting } from "./types";

// const meetings: SacramentMeeting[] = [
//   {
//     id: 1,
//     date: "2026-09-20",
//     meetingType: "regular",
//     presiding: "Bishop Peralta",
//     conducting: "Brother Jones",
//     openingHymn: {
//       number: 85,
//       title: "How Firm a Foundation",
//     },
//     openingPrayer: "Brother Brown",
//     wardBusiness: [],
//     stakeBusiness: false,
//     sacramentHymn: {
//       number: 194,
//       title: "There Is a Green Hill Far Away",
//     },
//     speakers: [],
//     closingHymn: {
//       number: 301,
//       title: "I Am a Child of God",
//     },
//     closingPrayer: "Sister Karen",
//   },
//   {
//     id: 2,
//     date: "2026-09-13",
//     meetingType: "testimony",
//     presiding: "Bishop Mahinay",
//     conducting: "Brother Jones",
//     openingHymn: {
//       number: 100,
//       title: "I Need Thee Every Hour",
//     },
//     openingPrayer: "Brother Brown",
//     wardBusiness: [],
//     stakeBusiness: false,
//     sacramentHymn: {
//       number: 185,
//       title: "Reverently and Meekly Now",
//     },
//     speakers: [],
//     closingHymn: {
//       number: 227,
//       title: "Lead, Kindly Light",
//     },
//     closingPrayer: "Sister Carel",
//   },
//   {
//     id: 3,
//     date: "2026-09-06",
//     meetingType: "regular",
//     presiding: "Bishop Dumael",
//     conducting: "Sister Jhelyn",
//     openingHymn: {
//       number: 2,
//       title: "The Spirit of God",
//     },
//     openingPrayer: "Brother Wilson",
//     wardBusiness: [
//       {
//         description: "Youth activity announcement",
//       },
//     ],
//     stakeBusiness: false,
//     sacramentHymn: {
//       number: 193,
//       title: "I Stand All Amazed",
//     },
//     speakers: [
//       {
//         name: "John Smith",
//         topic: "Faith in Jesus Christ",
//         type: "speaker",
//       },
//       {
//         name: "Mary Smith",
//         topic: "Serving Others",
//         type: "speaker",
//       },
//     ],
//     closingHymn: {
//       number: 219,
//       title: "Because I Have Been Given Much",
//     },
//     closingPrayer: "Sister Esmeralda",
//   },
//   {
//     id: 4,
//     date: "2026-08-30",
//     meetingType: "stake",
//     presiding: "Stake President Quintia",
//     conducting: "Brother Wilson",
//     openingHymn: {
//       number: 26,
//       title: "Joseph Smith's First Prayer",
//     },
//     openingPrayer: "Brother Taylor",
//     wardBusiness: [],
//     stakeBusiness: true,
//     sacramentHymn: {
//       number: 169,
//       title: "As Now We Take the Sacrament",
//     },
//     speakers: [
//       {
//         name: "Stake President Brown",
//         topic: "Following Jesus Christ",
//         type: "speaker",
//       },
//     ],
//     closingHymn: {
//       number: 223,
//       title: "Have I Done Any Good?",
//     },
//     closingPrayer: "Brother Wilson",
//   },
//   {
//     id: 5,
//     date: "2026-08-23",
//     meetingType: "general",
//     presiding: "Bishop Tobias",
//     conducting: "Sister Bautista",
//     openingHymn: {
//       number: 85,
//       title: "How Firm a Foundation",
//     },
//     openingPrayer: "Brother Brown",
//     wardBusiness: [],
//     stakeBusiness: false,
//     sacramentHymn: {
//       number: 172,
//       title: "In Humility, Our Savior",
//     },
//     speakers: [
//       {
//         name: "Emily Johnson",
//         topic: "The Savior's Love",
//         type: "speaker",
//       },
//       {
//         name: "Youth Choir",
//         topic: "Special Musical Number",
//         type: "musical-number",
//       },
//     ],
//     closingHymn: {
//       number: 303,
//       title: "Keep the Commandments",
//     },
//     closingPrayer: "Brother Jones",
//   },
// ];

// export function getMeetings(): SacramentMeeting[] {
//   return meetings;
// }

// export function getMeetingById(
//   id: number
// ): SacramentMeeting | undefined {
//   return meetings.find((meeting) => meeting.id === id);
// }