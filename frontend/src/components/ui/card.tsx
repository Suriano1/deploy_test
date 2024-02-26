"use client";
import { LuActivity } from "react-icons/lu";

const Card = (value: any) => {
  const iin = value.iinTotal[value.iinTotal.length - 1] as any;
  const i1 = value.i1Total[value.i1Total.length - 1] as any;
  const i2 = value.i2Total[value.i2Total.length - 1] as any;
  const vin = value.vinTotal[value.vinTotal.length - 1] as any;
  const vout = value.voutTotal[value.voutTotal.length - 1] as any;
  const timercount = value.timerCount;
  return (
    <>
      <article className="flex flex-col w-full bg-[#182237] p-2 rounded-lg gap-3 text-[#b7bac1] shadow-lg hover:scale-105 duration-300">
        <div className=" flex items-center gap-3 mt-2 ml-5">
          <LuActivity className="text-amber-400" size={40} />
          <h1 className="text-2xl">
            <span className="font-bold ">Parâmetros</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 mt-4 ml-6">
          <div className="flex gap-2 items-center text-xl">
            <span className="font-extrabold">Tempo:</span>
            <span>{timercount} h</span>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <span className="font-extrabold">Iin:</span>
            <span>{iin} A</span>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <span className="font-extrabold">Iout 1:</span>
            <span>{i1} A</span>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <span className="font-extrabold">Iout 2:</span>
            <span>{i2} A</span>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <span className="font-extrabold">Vin:</span>
            <span>{vin} A</span>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <span className="font-extrabold">Vout:</span>
            <span>{vout} A</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
