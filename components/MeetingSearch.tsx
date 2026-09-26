"use client";

import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="search"
      placeholder="Search meetings..."
      aria-label="Search meetings"
      defaultValue={searchParams.get("query") || ""}
      onChange={(e) => handleSearch(e.target.value)}
      className="w-full rounded-md border px-4 py-2"
    />
  );
}