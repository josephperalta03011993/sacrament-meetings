import { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-09-20",
    meetingType: "regular",
    presiding: "Bishop Peralta",
    conducting: "Brother Jones",
    openingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    openingPrayer: "Brother Brown",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 194,
      title: "There Is a Green Hill Far Away",
    },
    speakers: [],
    closingHymn: {
      number: 301,
      title: "I Am a Child of God",
    },
    closingPrayer: "Sister Karen",
  },
  {
    id: 2,
    date: "2026-09-13",
    meetingType: "testimony",
    presiding: "Bishop Mahinay",
    conducting: "Brother Jones",
    openingHymn: {
      number: 100,
      title: "I Need Thee Every Hour",
    },
    openingPrayer: "Brother Brown",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 185,
      title: "Reverently and Meekly Now",
    },
    speakers: [],
    closingHymn: {
      number: 227,
      title: "Lead, Kindly Light",
    },
    closingPrayer: "Sister Carel",
  },
  {
    id: 3,
    date: "2026-09-06",
    meetingType: "regular",
    presiding: "Bishop Dumael",
    conducting: "Sister Jhelyn",
    openingHymn: {
      number: 2,
      title: "The Spirit of God",
    },
    openingPrayer: "Brother Wilson",
    wardBusiness: [
      {
        description: "Youth activity announcement",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 193,
      title: "I Stand All Amazed",
    },
    speakers: [
      {
        name: "John Smith",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      {
        name: "Mary Smith",
        topic: "Serving Others",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 219,
      title: "Because I Have Been Given Much",
    },
    closingPrayer: "Sister Esmeralda",
  },
  {
    id: 4,
    date: "2026-08-30",
    meetingType: "stake",
    presiding: "Stake President Quintia",
    conducting: "Brother Wilson",
    openingHymn: {
      number: 26,
      title: "Joseph Smith's First Prayer",
    },
    openingPrayer: "Brother Taylor",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 169,
      title: "As Now We Take the Sacrament",
    },
    speakers: [
      {
        name: "Stake President Brown",
        topic: "Following Jesus Christ",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 223,
      title: "Have I Done Any Good?",
    },
    closingPrayer: "Brother Wilson",
  },
  {
    id: 5,
    date: "2026-08-23",
    meetingType: "general",
    presiding: "Bishop Tobias",
    conducting: "Sister Bautista",
    openingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    openingPrayer: "Brother Brown",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: "In Humility, Our Savior",
    },
    speakers: [
      {
        name: "Emily Johnson",
        topic: "The Savior's Love",
        type: "speaker",
      },
      {
        name: "Youth Choir",
        topic: "Special Musical Number",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 303,
      title: "Keep the Commandments",
    },
    closingPrayer: "Brother Jones",
  },
];

export function getMeetings(): SacramentMeeting[] {
  return meetings;
}

export function getMeetingById(
  id: number
): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.id === id);
}