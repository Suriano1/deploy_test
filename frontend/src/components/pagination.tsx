"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface dataProps {
  Board: Array<Object>;
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}
export const Pagination = ({ count }: any) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const totalCount = count;
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 8;
  const hasPrev = ITEM_PER_PAGE * (Number(page) - 1) > 0;
  const hasNext =
    ITEM_PER_PAGE * (Number(page) - 1) + ITEM_PER_PAGE < totalCount;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", String(Number(page) - 1))
      : params.set("page", String(Number(page) + 1));
    replace(`${pathname}?${params}`);
  };
  return (
    <div>
      <div className="w-full flex justify-between mt-6">
        {!hasPrev ? (
          <button
            className="px-4 py-1 border rounded-md bg-[#c7ccc7a4] text-gray-300"
            disabled={true}
          >
            {" "}
            Previous
          </button>
        ) : (
          <button
            className="px-4 py-1 border rounded-md bg-[#182237] text-gray-300 hover:bg-[#202c46] "
            onClick={() => handleChangePage("prev")}
          >
            {" "}
            Previous
          </button>
        )}
        {!hasNext ? (
          <button
            className="px-4 py-1 border rounded-md bg-[#c0c1c2] text-gray-300"
            disabled={true}
          >
            {" "}
            Next
          </button>
        ) : (
          <button
            className="px-4 py-1 border rounded-md bg-[#182237] text-gray-300 hover:bg-[#202c46] "
            onClick={() => handleChangePage("next")}
          >
            {" "}
            Next
          </button>
        )}
      </div>
    </div>
  );
};
