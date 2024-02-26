"use client";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import moment from "moment";
import { FormEvent, useState } from "react";
import { ConfirmDialog } from "../ui/confirmDialog";
import { useRouter } from "next/navigation";
export default function BoardList(props: any) {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { id, mac, timercount, timerdata, createdAt } = props;
  const createdAT = new Date(createdAt).toLocaleString("pt-Br", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }) as any;
  const now = new Date().toLocaleString("pt-Br", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }) as any;
  const timer = timerdata[props?.timerdata.length - 1];
  const dif = moment(now, "DD/MM/YYYY HH:mm:ss").diff(
    moment(timer, "DD/MM/YYYY HH:mm:ss")
  );
  const difDay = moment.duration(dif).asDays();
  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    const url = "http://localhost:3333/board/";
    const res = await fetch(`${url}${id}`, { method: "DELETE" });
    if (!res.ok) {
      throw new Error("Falha ao deletar placa");
    }
    router.push("/");
    // return setIsDialogOpen(false);
  };
  const handleClick = async (e?: FormEvent) => {
    e?.preventDefault();
    setIsDialogOpen(true);
  };
  return (
    <tbody>
      <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0">
        <td>{mac}</td>
        <td>{timercount}</td>
        <td>{createdAT}</td>
        <td>
          {difDay <= 1 ? (
            <span className="bg-green-500 px-2 py1 rounded"> Sim</span>
          ) : (
            <span className="bg-red-400 px-2 py1 rounded"> Não</span>
          )}
        </td>
        <td>
          <div className="flex gap-4">
            <Link href={`/dashboard/${id}`}>
              <GrView className="w-6 h-6 border-gray-500 rounded-lg hover:text-[#727472a4]" />
            </Link>
            <form>
              <button onClick={handleClick}>
                <FaRegTrashAlt className="w-6 h-6 border-gray-500 rounded-lg hover:text-[#727472a4]" />
              </button>
              <ConfirmDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                message="Deseja mesmo remover?"
                confirmButtonLabel="Remover"
                onConfirm={handleSubmit}
              />
            </form>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
