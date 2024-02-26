"use client";

import BoardList from "../boardlist";
import { PageProps } from "@/app/(dashboard-routes)/dashboard/page";
import { Pagination } from "../pagination";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
interface dataProps {
  Board: Array<Object>;
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export const BoardItem = (props: PageProps) => {
  const searchParams = useSearchParams();
  const url = "http://localhost:3333/boardList/";
  const search = props.searchParams?.search || "";
  const page = searchParams.get("page") || 1;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<dataProps>(
    `${
      search !== ""
        ? `${url}?page=${page}&search=${search}`
        : `${url}?page=${page}`
    }`,
    fetcher
  );
  const count = data?.totalCount;
  return (
    <>
      <table className="min-w-full my-2">
        <thead>
          <tr>
            <th className="font-semibold text-left pl-1">Nome</th>
            <th className="font-semibold text-left">Horas de Uso</th>
            <th className="font-semibold text-left">Data de Criação</th>
            <th className="font-semibold text-left">Está ativa ?</th>
          </tr>
        </thead>
        {data?.Board.map((board) => (
          <BoardList {...board} key={board} />
        ))}
      </table>
      {data?.totalCount && <Pagination count={count} />}
    </>
  );
};
