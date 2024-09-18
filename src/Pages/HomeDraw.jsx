import { Drawer, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { useState } from "react";

const redirectLink = [
  {
    title: `Pit Ladder`,
    link: `/Ladderboard`,
  },
  {
    title: `Skills Stats`,
    link: `/Builds`,
  },
  {
    title: `Class Stats`,
    link: `/Puzzle`,
  },
];

const extraRedirect = [
  {
    title: `Submission Form`,
    link: `https://docs.google.com/forms/d/e/1FAIpQLSce0ljItcpQb7BJ3KMuSMFQI7-IVUJEy8qwDLz00tzUJlgBpw/viewform`,
  },
  {
    title: `Discord`,
    link: `https://discord.gg/HdpcEwAepY`,
  },
  {
    title: `Donation`,
    link: `https://ko-fi.com/capricey23`,
  },
];

export function HomeDraw() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button
          className="text-[12px] text-white bg-gradient-to-tr from-[#622577] to-[#030a8f] flex items-center justify-center gap-2"
          onClick={openDrawer}
        >
          <div className="flex relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1ccfe7] opacity-75" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-[#1ccfe7] " />
          </div>
          Main Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-gradient-to-br from-[#2b2b4d] to-[#000000]"
        size={300}
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="font-customDress text-white uppercase text-[18px]">
            Main Menu
          </div>
          <IconButton variant="filled" color="black" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="border-t-[1px] border-[#6b6b6b]" />

        <div className="my-2">
          <div className="font-customNoto text-[12px] text-red-400 text-start">
            Please ensure to update and bookmark the latest link. Our platform
            has been relocated to:
          </div>
          <Link to={`https://diablo4pit.pages.dev/`} target="_blank">
            <div className="font-customNoto text-[12px] text-cyan-500 text-start">
              diablo4pit.pages.dev/
            </div>
          </Link>
        </div>

        <div className="mt-10 mb-2">
          <div className="font-customDress text-center text-white uppercase text-[18px]">
            Current Season
          </div>
        </div>

        <div className="border-t-[1px] border-[#6b6b6b]" />

        <div className="flex flex-col gap-1 mt-2">
          {redirectLink.map((obj) => (
            <Link to={obj.link}>
              <Button
                size="sm"
                variant="filled"
                className="w-full justify-start font-customNoto text-[12px] flex gap-2 items-center bg-transparent hover:scale-105 transition-all duration-100 ease-in"
              >
                {obj.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          ))}
        </div>

        <div className="mt-10 mb-2">
          <div className="font-customDress text-center text-white uppercase text-[18px]">
            Links
          </div>
        </div>

        <div className="border-t-[1px] border-[#6b6b6b]" />

        <div className="flex flex-col gap-1 mt-2">
          {extraRedirect.map((obj) => (
            <Link to={obj.link} target="_blank">
              <Button
                size="sm"
                variant="filled"
                className="w-full justify-start font-customNoto text-[12px] flex gap-2 items-center bg-transparent hover:scale-105 transition-all duration-100 ease-in"
              >
                {obj.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
}
