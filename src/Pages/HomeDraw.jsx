import { Drawer, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { useState } from "react";

const redirectLink = [
  {
    title: `S6 Pit Ladder`,
    link: `/Ladderboard`,
  },
  {
    title: `S6 Skills Stats`,
    link: `/Builds`,
  },
  {
    title: `S6 Class Stats`,
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
  const [open, setOpen] = useState(true);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <Button
          className="text-[12px] text-white bg-[#222b59cc] flex items-center justify-center gap-2"
          onClick={openDrawer}
        >
          <div className="flex relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
          </div>
          Latest Development
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
        className="p-4 bg-gradient-to-br from-[#36363b] to-[#020202]"
        size={300}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="font-customDress text-white uppercase text-[18px]">
            Latest Development
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

        <div className="my-5">
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

        <div className="flex flex-col gap-2 my-5">
          {redirectLink.map((obj) => (
            <Link to={obj.link}>
              <Button
                size="sm"
                variant="filled"
                className="w-full text-white justify-center font-customSource text-[13px] flex gap-2 items-center bg-[#2f2f5f] hover:scale-105 transition-all duration-100 ease-in"
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

        <div className="mt-10 mb-5">
          <div className="font-customNoto text-[12px] text-white text-start">
            We invite you to join the Diablo 4 Pit Discord for the latest
            updates on the website's development and to connect with the
            developer directly for any inquiries you may have about the site.
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          {extraRedirect.map((obj) => (
            <Link to={obj.link} target="_blank">
              <Button
                size="sm"
                variant="filled"
                className="w-full text-white text-center font-customNoto text-[12px] bg-[#2f2f5f] hover:scale-105 transition-all duration-100 ease-in"
              >
                {obj.title}
              </Button>
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
}
