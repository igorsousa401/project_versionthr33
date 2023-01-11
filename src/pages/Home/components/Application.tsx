import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import untypedData from "data/application-data.json";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = untypedData;
const titleArray = ["workers", "leadership"];
function Application() {
  const [title, setTitle] = useState<number>(0);
  return (
    <div className="relative section-roll container mx-auto grid grid-cols-2 md:gap-5 pt-5 md:pt-0 h-100">
      <div className="col-span-2 md:col-span-1 flex py-16 mx-auto">
        <div className="flex flex-col gap-3 w-fit mt-24 ">
          <p className="uppercase text-application text-white text-center">
            application
          </p>
          <div className="flex justify-between pl-4 pr-4 py-3 items-center bg-white rounded-3xl">
            <ArrowLeftIcon
              width={32}
              color={"#fff"}
              className="bg-[#2A2A2A] rounded-full hover:cursor-pointer hover:opacity-70"
              onClick={() => setTitle((prev) => Math.abs(prev - 1))}
            />
            <p className="uppercase text-large italic text-center text-black">
              {data[titleArray[title]].title}
            </p>
            <ArrowRightIcon
              width={32}
              color={"#fff"}
              className="bg-[#2A2A2A] rounded-full hover:cursor-pointer hover:opacity-70"
              onClick={() => setTitle((prev) => Math.abs(prev - 1))}
            />
          </div>
          {data[titleArray[title]].data.map((content: string, i: number) => (
              <div key={content} dangerouslySetInnerHTML={ { __html: content } }></div>
          ))}
          <div className="flex mt-1 justify-center rounded-3xl">
            <button className="uppercase text-medium py-2.5 italic rounded-2xl bg-white px-20 hover:bg-slate-200 text-black">
              apply
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <img src="/images/character-king.png" alt="Character King" />
      </div>
    </div>
  );
}

export default Application;
