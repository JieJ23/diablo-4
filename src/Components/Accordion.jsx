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

export const tierColor = (tier) => {
  if (tier >= 140) {
    return `#ff0000`;
  } else if (tier >= 130) {
    return `#ff7e00`;
  } else if (tier >= 120) {
    return `#ffbd00`;
  } else if (tier >= 110) {
    return `#cccc62`;
  } else {
    return `white`;
  }
};

export const classColor = (type) => {
  switch (type) {
    case "Barbarian":
      return `#990000`;
    case "Druid":
      return `#5C4033`;
    case "Rogue":
      return `#301934`;
    case "Necromancer":
      return `#013220`;
    case "Sorcerer":
      return "#003366";
  }
};

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

export default function AccordionMain({ obj, watch }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Reset both states when `watch` changes
    setOpen(false);
  }, [watch]);

  const handleOpen = (value) => setOpen(!value);

  return (
    <Accordion open={open} icon={<Icon id={open} />}>
      <AccordionHeader
        onClick={() => handleOpen(open)}
        className="flex justify-between"
      >
        {obj.Rank !== undefined ? (
          <div className=" ms-2">
            <Typography className="text-[12px] italic font-bold font-customSource">
              {`${obj.Rank}.`}
            </Typography>
          </div>
        ) : (
          <div className=" ms-2">
            <Typography className="text-[12px] italic font-bold font-customSource">
              {`----`}
            </Typography>
          </div>
        )}

        <div className="flex-1 flex justify-center">
          <Tooltip
            content={
              <div className="px-2">
                <Typography
                  className="font-customDiablo text-[14px]"
                  color="white"
                >
                  {obj.Class}
                </Typography>
              </div>
            }
            className="bg-black select-none p-1 border-[1px]"
          >
            <Avatar
              src={`/ClassesIcon/${obj.Class}.png`}
              draggable={false}
              variant="rounded"
              size="sm"
              style={{ backgroundColor: classColor(obj.Class) }}
              className="hover:scale-[110%] ease-in duration-100 transition-all shadow-[0_0_20px_black]"
            />
          </Tooltip>
        </div>

        <div
          className={`flex-1 text-center font-customSource text-[12px] md:text-[15px] ${
            obj.Mode === "HC" ? `text-[red]` : `text-white`
          }`}
        >
          {obj.Player}
          {obj.BossOnly === "yes" && (
            <Avatar
              src={`/boss.png`}
              size="xs"
              className="ms-1 bg-red-500 shadow-[0_0_10px_red]"
            />
          )}
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

      <AccordionBody className="flex flex-col justify-evenly">
        <div className="flex justify-center gap-4">
          <div>
            {obj["Build Planner"] === "" ? (
              <Typography
                className="font-customDress text-[16px] md:text-[18px]"
                color="white"
              >
                Build:
              </Typography>
            ) : (
              <Typography
                className="font-customDress text-[16px] md:text-[18px] hover:scale-[110%] ease-in duration-100 transition-all"
                color="blue"
              >
                <a href={obj["Build Planner"]} target="_blank">
                  Build:
                </a>
              </Typography>
            )}
          </div>
          <div className="text-center">
            <Typography
              className="font-customDress text-[16px] md:text-[18px] hover:scale-[110%] ease-in duration-100 transition-all"
              color="amber"
            >
              <a href={obj["Run Video"]} target="_blank">
                {obj["Build Name"]}
              </a>
            </Typography>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          {ReturnSkillIcon(obj["Skills Used"]).map((item) => (
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
        {obj.Comment !== "" && (
          <div className="flex justify-center my-1 select-none">
            <Typography className="font-customNoto text-[12px] px-4 md:px-24 pt-2">
              {obj["Run Comment"] !== ""
                ? obj["Run Comment"]
                : `(No Remark Available)`}
            </Typography>
          </div>
        )}

        {obj.BossOnly && (
          <div className="font-customDress text-[red] text-center my-1">
            Boss Fight Only
          </div>
        )}
        {obj.Mode === `HC` && (
          <div className="font-customDress text-[red] text-center my-1">
            Mode: Hardcore
          </div>
        )}
        {convertToSec(obj["Time Used"]) >= 900 && (
          <div className="font-customDress text-[red] text-center my-1">
            Time Over: +15 Minutes
          </div>
        )}

        {obj.classRank && (
          <div className="flex justify-center gap-4 select-none my-1">
            <div className="font-customDress text-[#58a1e5] text-center text-[14px] sm:text-[16px] backdrop-blur-md shadow-[0_0_5px_#58a1e5] rounded-xl p-3">
              Rank #{obj.classRank} {obj.Class}
            </div>
            <div className="font-customDress text-[yellow] text-center text-[14px] sm:text-[16px] backdrop-blur-md shadow-[0_0_5px_yellow] rounded-xl p-3">
              Rank #{obj.Rank} Overall
            </div>
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
            {obj["Build Planner"] !== "" && (
              <a href={obj["Build Planner"]} target="_blank">
                <Avatar
                  src={`build.png`}
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
