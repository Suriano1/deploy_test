import { MdSearch } from "react-icons/md";
import { Container } from "@/components/container";
import Search from "../search";
export default function DashboardHeader() {
  return (
    <header className="w-full my-2 p-3 bg-[#182237] flex rounded-lg">
      <Search />
    </header>
  );
}
