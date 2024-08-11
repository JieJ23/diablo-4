import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { faqObj } from "../DataLogic/FaqObj";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
import FAQWrap from "./CustomWrap/FAQCustom";

export default function FAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="md:my-10 mb-0 mt-5 w-full max-w-[1000px] mx-auto md:shadow-[0_0_10px_white] rounded-lg p-4 bg-[transparent] backdrop-blur-md">
      <FAQWrap>
        <div className="text-[20px] text-white font-customNoto opacity-60">
          FAQ / General Information
        </div>
        {faqObj.map((item) => (
          <Accordion
            open={open === item.num}
            icon={<Icon id={item.num} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(item.num)}
              className="font-customNoto font-normal text-[16px]"
            >
              {item.q}
            </AccordionHeader>
            <AccordionBody className="font-customSource italic font-normal text-[14px] text-amber-500 whitespace-pre-line">
              {item.a}
            </AccordionBody>
          </Accordion>
        ))}
      </FAQWrap>
    </div>
  );
}
