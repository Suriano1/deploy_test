import { BoardItem } from "@/components/boards";
import { Container } from "@/components/container";
import DashboardHeader from "@/components/headerDashboard";

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Dashboard(props: PageProps) {
  return (
    <Container>
      <main className="mt-4">
        <DashboardHeader />

        <div>
          <h1 className="text-3xl font-bold border-b-2 pb-2">Placas</h1>
        </div>
        <BoardItem {...props} />
      </main>
    </Container>
  );
}
