import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Sacrament Meeting Planner
      </h1>

      <p className="mt-4 text-lg">
        Plan, manage, and view sacrament meeting programs.
      </p>

      <Image
        src="/bs1-chapel.webp"
        alt="Bagong Silang 1st Ward Sacrament Meeting Chapel"
        width={800}
        height={450}
        className="mx-auto mt-8 rounded-lg"
      />

      <Link
        href="/meetings"
        className="mt-6 inline-block rounded-md border px-5 py-3 font-medium hover:bg-gray-100"
      >
        View Meetings
      </Link>
    </div>
  );
}