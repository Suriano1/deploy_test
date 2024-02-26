"use client";
import { Container } from "@/components/container";
import Card from "@/components/ui/card";
import Chart from "@/components/ui/chart";
import LedCard from "@/components/ui/ledCard";
import useSWR from "swr";
import { PageProps } from "@/app/(dashboard-routes)/dashboard/page";

export default function Dashboard(props: PageProps) {
  const { id } = props.params;

  const url = "http://localhost:3333/board/";
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`${url}${id}`, fetcher) as any;
  const iin = [data, "Corrente de Entrada", "iin"];
  const i1 = [data, "Corrente de Saída 1", "i1"];
  const i2 = [data, "Corrente de Saída 2", "i2"];
  const vin = [data, "Tensão de Entrada", "vin"];
  const vout = [data, "Tensão de Saída", "vout"];

  return (
    <Container>
      <main className="mt-4">
        <div>
          {data && (
            <h1 className="text-3xl font-bold border-b-2 pb-2">
              {data[7]?.mac}
            </h1>
          )}

          {data && (
            <div className="flex lg:flex-row sm:flex-col gap-4 mt-6">
              <Chart {...vin} />
              <Chart {...vout} />
              <LedCard {...data[7]} />
            </div>
          )}
          {data && (
            <div className="flex lg:flex-row sm:flex-col gap-4 mt-6">
              <Chart {...iin} />
              <Chart {...i1} />
              <Card {...data[6]} />
            </div>
          )}
          {data && (
            <div className="flex justify-center items-center mt-6">
              <Chart {...i2} />
            </div>
          )}
        </div>
      </main>
    </Container>
  );
}
