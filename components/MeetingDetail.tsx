import { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">
          Sacrament Meeting
        </h1>

        <p className="mt-2">
          {meeting.date} · {meeting.meetingType}
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Presiding & Conducting</h2>
        <p>Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Opening</h2>
        <p>
          Opening Hymn: #{meeting.openingHymn.number} —{" "}
          {meeting.openingHymn.title}
        </p>
        <p>Opening Prayer: {meeting.openingPrayer}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Ward Business</h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc pl-5">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p>No ward business.</p>
        )}

        <p className="mt-2">
          Stake Business: {meeting.stakeBusiness ? "Yes" : "No"}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sacrament</h2>
        <p>
          Sacrament Hymn: #{meeting.sacramentHymn.number} —{" "}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Speakers & Musical Numbers</h2>

        {meeting.speakers.length > 0 ? (
          <ul className="list-disc pl-5">
            {meeting.speakers.map((speaker, index) => (
              <li key={index}>
                {speaker.type === "speaker"
                  ? `${speaker.name} — ${speaker.topic}`
                  : `${speaker.name} — ${speaker.topic} (Musical Number)`}
              </li>
            ))}
          </ul>
        ) : (
          <p>No speakers or musical numbers.</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold">Closing</h2>
        <p>
          Closing Hymn: #{meeting.closingHymn.number} —{" "}
          {meeting.closingHymn.title}
        </p>
        <p>Closing Prayer: {meeting.closingPrayer}</p>
      </section>
    </article>
  );
}