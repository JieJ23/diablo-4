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
      {/* <div className="flex justify-between px-2">
        <Typography className="text-white text-[10px] sm:text-[12px] font-customSource">
          {obj.Rank}.
        </Typography>
        <Typography className="text-[10px] sm:text-[12px] text-white font-customSource">
          {obj.Date.slice(0, 10)}
        </Typography>
      </div> */}
      <AccordionHeader
        onClick={() => handleOpen(open)}
        className="flex justify-between"
      >
        <div className=" ms-2">
          <Typography className="text-[12px] italic font-bold font-customSource">
            {obj.Rank}.
          </Typography>
        </div>

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
              className="hover:scale-[110%] ease-in duration-100 transition-all"
            />
          </Tooltip>
        </div>

        <div className="flex-1 text-center font-customSource italic text-[13px] md:text-[14px]">
          {obj.Player}
        </div>

        <div className="flex-1 text-center font-customSource italic text-[13px] md:text-[14px]">
          {writeTimeInMS(obj.Time)}
        </div>

        <div className="flex-1 text-center font-customSource italic text-[13px] md:text-[14px]">
          <span className="font-customDiablo font-normal text-[18px] text-[red]">
            {`T `}
          </span>
          {obj.Tier}
        </div>
      </AccordionHeader>

      <AccordionBody className="flex flex-col justify-evenly">
        <div className="flex justify-center gap-4">
          <div>
            {obj.Planner === "" ? (
              <Typography
                className="font-customDiablo text-[16px] md:text-[18px]"
                color="white"
              >
                Build:
              </Typography>
            ) : (
              <Typography
                className="font-customDiablo text-[16px] md:text-[18px] hover:scale-[110%] ease-in duration-100 transition-all"
                color="blue"
              >
                <a href={obj.Planner} target="_blank">
                  Build:
                </a>
              </Typography>
            )}
          </div>
          <div className="text-center">
            <Typography
              className="font-customDiablo text-[16px] md:text-[18px] hover:scale-[110%] ease-in duration-100 transition-all"
              color="amber"
            >
              <a href={obj.Video} target="_blank">
                {obj.Build}
              </a>
            </Typography>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          {ReturnSkillIcon(obj.Skills).map((item) => (
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
              />
            </Tooltip>
          ))}
        </div>
        {obj.Comment !== "" && (
          <div>
            <Typography className="font-customNoto text-[12px] px-4 py-2">
              {obj.Comment}
            </Typography>
          </div>
        )}

        <div className="flex gap-2 justify-between px-4">
          <div>
            <Typography className="font-customSource text-[12px] opacity-80">
              {obj.Date.slice(0, 10)}
            </Typography>
          </div>
          <div className="flex gap-1">
            {obj.TwitchChannel !== "" && (
              <a
                href={obj.TwitchChannel}
                target="_blank"
                className="hover:scale-125 ease-in duration-200 transition-all"
              >
                <Avatar src={`/twitch.png`} variant="rouneded" size="xs" />
              </a>
            )}
            {obj.YTChannel !== "" && (
              <a href={obj.YTChannel} target="_blank">
                <Avatar
                  src={`/youtube.png`}
                  variant="rouneded"
                  size="xs"
                  className="hover:scale-125 ease-in duration-200 transition-all"
                />
              </a>
            )}
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
}
