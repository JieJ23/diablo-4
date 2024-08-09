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

export default function AccordionMain({ obj }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => setOpen(!value);

  return (
    <Accordion open={open} icon={<Icon id={open} />}>
      <div className="flex justify-between px-2">
        <Typography className="text-white text-[10px] sm:text-[12px] font-customSource">
          {obj.Rank}.
        </Typography>
        {/* <Typography className="text-[10px] sm:text-[12px] text-white font-customSource">
          {obj.Date.slice(0, 10)}
        </Typography> */}
      </div>
      <AccordionHeader
        onClick={() => handleOpen(open)}
        className="flex justify-between"
      >
        <div className="flex-1 flex justify-center">
          <Tooltip
            content={
              <div className="text-center px-4">
                <Typography
                  className="font-customDiablo font-bold text-[14px]"
                  color="white"
                >
                  {obj.Class}
                </Typography>
              </div>
            }
            className="font-customFont bg-[#131111] select-none p-2 border-[1px] border-[orange]"
          >
            <Avatar src={`/Classes/${obj.Class}.png`} draggable={false} />
          </Tooltip>
        </div>

        <div className="flex-1 text-center font-customDiablo text-[12px] md:text-[16px]">
          {obj.Player}
        </div>

        <div className="flex-1 text-center font-customNoto text-[12px] md:text-[14px]">
          {writeTimeInMS(obj.Time)}
        </div>

        <div className="flex-1 text-center font-customNoto text-[12px] md:text-[14px]">
          {obj.Tier}
        </div>
      </AccordionHeader>

      <AccordionBody className="flex justify-evenly">
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-2">
          <div className="text-center font-customDiablo text-[16px]">
            {obj.Planner === "" ? (
              <Typography
                className="font-customDiablo text-[16px]"
                color="white"
              >
                Build:
              </Typography>
            ) : (
              <Typography
                className="font-customDiablo text-[16px]"
                color="blue"
              >
                <a href={obj.Planner} target="_blank">
                  Build:
                </a>
              </Typography>
            )}
          </div>
          <div className="text-center">
            <Typography className="font-customDiablo text-[16px]" color="amber">
              <a href={obj.Video} target="_blank">
                {obj.Build}
              </a>
            </Typography>
          </div>
        </div>

        <div className=" flex flex-wrap gap-1 justify-center">
          {ReturnSkillIcon(obj.Skills).map((item) => (
            <Tooltip
              content={
                <div className="text-center px-4">
                  <Typography
                    className="font-customDiablo font-bold text-[14px]"
                    color="white"
                  >
                    {item}
                  </Typography>
                </div>
              }
              className="font-customFont bg-[#131111] select-none p-2 border-[1px] border-[orange]"
            >
              <Avatar
                src={`/Skills/${item}.png`}
                variant="rounded"
                size="sm"
                className="border-[1px] border-green-600 rounded-sm"
                draggable={false}
              />
            </Tooltip>
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
}
