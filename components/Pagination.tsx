"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({
  totalPages,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav
      aria-label="Pagination"
      className="mt-6 flex items-center justify-center gap-4"
    >
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Previous
        </Link>
      )}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Next
        </Link>
      )}
    </nav>
  );
}