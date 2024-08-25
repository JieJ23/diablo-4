import {
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import { useState } from "react";
import { ReturnSkillIcon, writeTimeInMS } from "../DataLogic/ProcessFunction";
import { useEffect } from "react";
import { convertToSec } from "../DataLogic/ProcessFunction";
import { tierColor } from "./Accordion";
import { classColor } from "./Accordion";

function Icon({ id }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === true ? "rotate-180" : ""
      } h-3 w-3 transition-transform me-2`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function DuoAccordionMain({ obj }) {
  const [open, setOpen] = useState(false);

  //   useEffect(() => {
  //     setOpen(false);
  //   }, [watch]);

  const handleOpen = (value) => setOpen(!value);

  return (
    <Accordion open={open} icon={<Icon id={open} />}>
      <AccordionHeader onClick={() => handleOpen(open)} className="flex">
        <div className="flex-1 flex gap-2 justify-center">
          <Tooltip
            content={
              <div className="px-2">
                <Typography
                  className="font-customDiablo text-[14px]"
                  color="white"
                >
                  {obj["Player 1 Class"]}
                </Typography>
              </div>
            }
            className="bg-black select-none p-1 border-[1px]"
          >
            <Avatar
              src={`/ClassesIcon/${obj["Player 1 Class"]}.png`}
              draggable={false}
              variant="rounded"
              size="sm"
              style={{ backgroundColor: classColor(obj["Player 1 Class"]) }}
              className="hover:scale-[110%] ease-in duration-100 transition-all shadow-[0_0_20px_black]"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip
            content={
              <div className="px-2">
                <Typography
                  className="font-customDiablo text-[14px]"
                  color="white"
                >
                  {obj["Player 2 Class"]}
                </Typography>
              </div>
            }
            className="bg-black select-none p-1 border-[1px]"
          >
            <Avatar
              src={`/ClassesIcon/${obj["Player 2 Class"]}.png`}
              draggable={false}
              variant="rounded"
              size="sm"
              style={{ backgroundColor: classColor(obj["Player 2 Class"]) }}
              className="hover:scale-[110%] ease-in duration-100 transition-all shadow-[0_0_20px_black]"
              loading="lazy"
            />
          </Tooltip>
        </div>

        <div
          className={`flex-1 text-center font-customNoto text-[12px] md:text-[14px] `}
        >
          {obj["Team Name"]}
        </div>
        <div
          className={`flex-1 text-center font-customSource italic text-[13px] md:text-[15px] ${
            writeTimeInMS(obj["Time Used"]) <= 180 && `text-orange-300`
          }`}
        >
          <span className="font-customDiablo font-normal text-[18px] text-[teal]">
            {`C `}
          </span>
          {obj["Time Used"]}
          {convertToSec(obj["Time Used"]) >= 900 && (
            <Avatar src="/warning.png" size="xs" className="ms-1" />
          )}
        </div>

        <div
          className={`flex-1 text-center font-customSource italic text-[13px] md:text-[15px]`}
          style={{ color: tierColor(obj.Tier) }}
        >
          <span className="font-customDiablo font-normal text-[18px] text-[red]">
            {`T `}
          </span>
          {obj.Tier}
        </div>
      </AccordionHeader>

      <AccordionBody>
        <div className="border-t-[1px] border-gray-500 max-w-[90%] mx-auto" />
        <section className="flex flex-col sm:flex-row gap-2 justify-evenly text-center p-2 sm:px-8">
          <div
            className="flex flex-1 flex-col px-3 py-1 rounded-lg"
            style={{
              backgroundColor: `${classColor(obj["Player 1 Class"])}b3`,
            }}
          >
            <div className="text-[12px] font-customDiablo text-white">
              {obj["Player 1 Class"]}
            </div>
            <div className="text-[14px] font-customNoto font-bold">
              {obj["Player 1 Name"]}
            </div>
            <div className="flex gap-1 justify-center">
              {ReturnSkillIcon(obj["Player 1 Skills Used"]).map((item) => (
                <Tooltip
                  content={
                    <div className="px-2">
                      <Typography
                        className="font-customDiablo text-[14px]"
                        color="white"
                      >
                        {item}
                      </Typography>
                    </div>
                  }
                  className="bg-black select-none p-1 border-[1px]"
                >
                  <Avatar
                    src={`/Skills/${item}.png`}
                    variant="rounded"
                    size="sm"
                    draggable={false}
                    className="hover:scale-[110%] ease-in duration-100 transition-all"
                    loading="lazy"
                  />
                </Tooltip>
              ))}
            </div>
            <div className="text-[16px] font-customDiablo text-white">
              {obj["Player 1 Build Name"]}
            </div>
          </div>

          <div
            className="flex flex-1 flex-col px-3 py-1 rounded-lg"
            style={{
              backgroundColor: `${classColor(obj["Player 2 Class"])}b3`,
            }}
          >
            <div className="text-[12px] font-customDiablo text-white">
              {obj["Player 2 Class"]}
            </div>
            <div className="text-[14px] font-customNoto font-bold">
              {obj["Player 2 Name"]}
            </div>
            <div className="flex gap-1 justify-center">
              {ReturnSkillIcon(obj["Player 2 Skills Used"]).map((item) => (
                <Tooltip
                  content={
                    <div className="px-2">
                      <Typography
                        className="font-customDiablo text-[14px]"
                        color="white"
                      >
                        {item}
                      </Typography>
                    </div>
                  }
                  className="bg-black select-none p-1 border-[1px]"
                >
                  <Avatar
                    src={`/Skills/${item}.png`}
                    variant="rounded"
                    size="sm"
                    draggable={false}
                    className="hover:scale-[110%] ease-in duration-100 transition-all"
                    loading="lazy"
                  />
                </Tooltip>
              ))}
            </div>
            <div className="text-[16px] font-customDiablo text-white">
              {obj["Player 2 Build Name"]}
            </div>
          </div>
        </section>
        {obj.Comment !== "" && (
          <div className="flex justify-center">
            <Typography className="font-customNoto text-[12px] px-4 md:px-24 py-2">
              {obj["Run Comment"] !== ""
                ? obj["Run Comment"]
                : `(No Remark Available)`}
            </Typography>
          </div>
        )}
        <div className="flex gap-2 justify-between px-4 items-center">
          <div>
            <Typography className="font-customSource text-[12px] opacity-80">
              {obj.Date.slice(0, 10)}
            </Typography>
          </div>
          <div className="flex gap-1">
            {obj["Run Video"] && (
              <a href={obj["Run Video"]} target="_blank">
                <Avatar
                  src={
                    obj["Run Video"].includes(`x.com`)
                      ? `/Skills/X.png`
                      : obj["Run Video"].includes(`bilibili`)
                      ? `/bilibili.png`
                      : `/youtube.png`
                  }
                  variant="rounded"
                  size="sm"
                  className="hover:scale-110 ease-in duration-200 transition-all p-0.5"
                  loading="lazy"
                />
              </a>
            )}
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
}
