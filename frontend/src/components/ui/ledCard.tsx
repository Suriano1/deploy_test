"use client";

import { TbBulb, TbBulbFilled, TbBulbOff } from "react-icons/tb";
const LedCard = (value: any) => {
  const lred = value?.st_red;
  const lyellow = value?.st_yellow;
  const lgreen = value?.st_green;

  return (
    <>
      <article className="flex flex-col w-full bg-[#182237] p-2 rounded-lg gap-6 text-[#b7bac1] shadow-lg hover:scale-105 duration-300">
        <div className=" flex items-center gap-3 mt-2 ml-5">
          <TbBulb className="text-[#b7bac1]" size={40} />
          <h1 className="text-2xl">
            <span className="font-bold">LEDs</span>
          </h1>
        </div>
        <div className="flex flex-col gap-12 mt-4 ml-5">
          <div className="flex gap-2 items-center text-2xl">
            {lgreen === true ? (
              <TbBulbFilled
                className="text-green-700 animate-pulse"
                size={40}
              />
            ) : (
              <TbBulbOff size={40} />
            )}

            <span className="font-bold">Verde</span>
          </div>
          <div className="flex gap-2 items-center text-2xl">
            {lyellow === true ? (
              <TbBulbFilled
                className="text-yellow-500 animate-pulse"
                size={40}
              />
            ) : (
              <TbBulbOff size={40} />
            )}
            <span className="font-bold">Amarelo</span>
          </div>
          <div className="flex gap-2 items-center text-2xl">
            {lred === true ? (
              <TbBulbFilled className="text-red-700 animate-pulse" size={40} />
            ) : (
              <TbBulbOff size={40} />
            )}

            <span className="font-bold ">Vermelho</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default LedCard;
