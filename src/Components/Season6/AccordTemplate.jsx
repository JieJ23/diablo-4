import { classColor } from "../Accordion";
import { tierColor } from "../Accordion";
import {
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Tooltip,
  Chip,
} from "@material-tailwind/react";

import { useState, useEffect } from "react";
import {
  ReturnSkillIcon,
  writeTimeInMS,
} from "../../DataLogic/ProcessFunction";
import { convertToSec } from "../../DataLogic/ProcessFunction";
import { haveProfile } from "../../DataLogic/Profile";

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

export default function AccordTemplate({ obj, watch, watch2, watch3, watch4 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [watch, watch2, watch3, watch4]);

  const handleOpen = (value) => setOpen(!value);

  return (
    <Accordion open={open} icon={<Icon id={open} />} className="select-none">
      <AccordionHeader
        onClick={() => handleOpen(open)}
        className="flex justify-between"
      >
        {obj["Build Planner"] !== "" && (
          <div className="absolute bottom-1 right-1 h-2 w-2 bg-[#ef2020] rounded-full select-none" />
        )}
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
          <div className="flex gap-1 justify-center items-center font-customNoto text-[13px] font-light">
            {haveProfile.includes(obj.Player) && (
              <Avatar
                src={`/pfp/${obj.Player}.png`}
                size="xs"
                variant="rounded"
                className="shadow-[0_0_10px_black] hidden sm:block"
              />
            )}
            {obj.Player}
          </div>
        </div>

        <div
          className={`flex-1 text-center font-customNoto text-[12px] md:text-[14px] ${
            writeTimeInMS(obj["Time Used"]) <= 180 && `text-orange-300`
          }`}
        >
          <span className="font-customNoto font-normal text-[16px] text-[orange]">
            {`C `}
          </span>
          {obj["Time Used"]}
        </div>

        <div
          className={`flex-1 text-center font-customNoto font-normal text-[12px] md:text-[14px]`}
          style={{ color: tierColor(obj.Tier) }}
        >
          <span className="font-customNoto font-normal text-[16px] text-[#47e87c]">
            {`T `}
          </span>
          {obj.Tier}
        </div>
      </AccordionHeader>
      {/* Patches */}
      <div className="absolute top-1 right-1 text-[10px] text-gray-400 text-center select-none">
        PTR
      </div>
      {/* Patches  */}
      <AccordionBody className="flex flex-col justify-evenly">
        <div className="flex justify-center gap-4">
          <div className="text-center">
            <Typography className="font-customNoto font-semibold text-[14px] uppercase text-[#47e87c]">
              {obj["Build Name"]}
            </Typography>
          </div>
        </div>

        <div className="flex gap-1 justify-center mt-1">
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
        <div className="flex gap-1 justify-center mt-1">
          {ReturnSkillIcon(obj["Runewords"]).map((item) => (
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
                src={`/Runewords/${item}.png`}
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

        {(obj.BossOnly || convertToSec(obj["Time Used"]) >= 900) && (
          <div className="flex flex-wrap justify-center gap-2 select-none my-1">
            {obj.BossOnly && (
              <Chip
                color="red"
                value={`Boss Fight Only`}
                className="text-black font-customNoto text-[12px] font-normal"
                variant="filled"
              />
            )}
            {convertToSec(obj["Time Used"]) >= 900 && (
              <Chip
                color="red"
                value={`+15 mins Overtime`}
                className="text-black font-customNoto text-[12px] font-normal"
                variant="filled"
              />
            )}
          </div>
        )}

        {(obj.Rank || obj.Mode === `HC`) && (
          <div className="flex flex-wrap justify-center gap-2 select-none my-1">
            {obj.classRank !== undefined && (
              <Chip
                color="indigo"
                value={`#${obj.classRank} ${obj.Class}`}
                className="text-white font-customNoto text-[12px] font-normal"
                variant="filled"
              />
            )}
            {obj.Rank !== undefined && (
              <Chip
                color="blue-gray"
                value={`#${obj.Rank} Overall`}
                variant="filled"
                className="text-white font-customNoto text-[12px] font-normal"
              />
            )}
            {obj.Mode === `HC` && (
              <Chip
                color="red"
                value={`Hardcore`}
                variant="filled"
                className="text-black font-customNoto text-[12px] font-normal"
              />
            )}
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
