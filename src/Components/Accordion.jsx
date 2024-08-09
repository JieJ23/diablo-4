import {
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

import { useState } from "react";

const testingSkills = [
  `fire_bolt`,
  `fireball`,
  `firewall`,
  `flame_shield`,
  `frost_bolt`,
  `teleport`,
];

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
      } h-4 w-4 transition-transform me-2`}
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
      <AccordionHeader
        onClick={() => handleOpen(open)}
        className="flex justify-between"
      >
        <div className="ms-2 text-[12px] text-center font-customSource">
          {obj.Rank}.
        </div>

        <div className="flex-1 text-center font-customDiablo text-[12px] md:text-[14px]">
          {obj.Player}
        </div>

        <div className="flex-1 flex justify-center">
          <Avatar src={`/Classes/${obj.Class}.png`} />
        </div>

        <div className="flex-1 text-center font-customNoto text-[12px] md:text-[14px]">
          {obj.Time}
        </div>

        <div className="flex-1 text-center font-customNoto text-[12px] md:text-[14px]">
          {obj.Tier}
        </div>
      </AccordionHeader>

      <AccordionBody className="flex justify-evenly">
        <div className="flex justify-center items-center gap-2">
          <div className="text-center font-customDiablo text-[16px]">
            Build:
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
          {testingSkills.map((item) => (
            <Avatar src={`/Skills/${item}.jpg`} variant="rounded" size="sm" />
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
}
