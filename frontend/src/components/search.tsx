"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

type Props = {};

export default function Search({}: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(1));
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
      params.delete("page");
    }
    replace(`${pathname}?${params}`);
  }, 200);
  return (
    <div className="flex gap-2 items-center bg-[#2e374a] ml-3 rounded-md">
      <MdSearch className="text-white w-4 h-4 ml-2" />
      <input
        className=" bg-transparent rounded-md focus:outline-none text-[#b7bac1]"
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
}
