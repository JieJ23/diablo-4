import { SubmitCard } from "../Components/Submission";
import Content from "../Components/Heroes";
import CountdownTimer from "../Components/Countdown";
import Navigation from "../Button/NavHead";
import Top10 from "../Components/HomeCarol";
import SeasonStats from "../Components/SeasonStat";
import SeasonSecondaryStat from "../Components/SeasonSecStat";
import { Link } from "react-router-dom";

import { HomeDraw } from "./HomeDraw";

import { Avatar } from "@material-tailwind/react";

import { PTR } from "../Components/PTR";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <div className="mt-15 py-5 flex flex-col gap-1 select-none">
      {/* <div className="flex justify-center gap-4">
        <Link
          to={`/Privacy`}
          className="text-white font-customNoto text-[13px]"
        >
          Privacy
        </Link>
        <Link
          to={`/Cookies`}
          className="text-white font-customNoto text-[13px]"
        >
          Cookies
        </Link>
        <Link
          to={`/TermsAndConditions`}
          className="text-white font-customNoto text-[13px]"
        >
          Terms & Conditions
        </Link>
      </div> */}
      <Link
        to={`https://discord.gg/XKaq4Rhzs6`}
        className="flex items-center justify-center gap-2"
        target="_blank"
      >
        <Avatar src={`/discord.png`} size="xs" />
        <div className="text-blue-500 font-customNoto text-center text-[12px]">
          Join Discord Community
        </div>
      </Link>
      <div className="text-gray-400 font-customNoto text-center text-[12px] px-2">
        This website has no affiliation with or endorsement from Activision
        Blizzard, Inc.
      </div>
      <div className="text-gray-400 font-customNoto text-center text-[12px]">
        © 2024 CY. All rights reserved.
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="h-lvh overflow-x-hidden select-none">
        <div className="fixed bg-[#131111] h-lvh w-full object-cover -z-20" />
        <img
          src="/mainBG.png"
          alt="cover-bg"
          className="fixed h-lvh w-full object-cover -z-10 object-center"
        />

        <section className="h-full flex flex-col justify-between">
          <Navigation />

          <div className="w-full max-w-[1200px] flex justify-center gap-2 mx-auto px-2 my-5">
            {/* <HomeDraw /> */}
            <SubmitCard />
          </div>

          <section className="text-center px-6 max-w-[1200px] mx-auto my-5 rounded-lg">
            <div className="text-gray-400 font-customDiablo text-[28px] mb-2 uppercase">
              Welcome to Diablo 4 Pit
            </div>
            <div className="whitespace-pre-line text-gray-400 font-customNoto text-[13px]">
              {`A website dedicated to documenting pit runs for each season. Launched in Season 5, the Season of the Infernal Horde, our platform offers the community a competitive leaderboard, ranking participants based on the fastest completion times and, more significantly, the highest tier completions. The leaderboards may offer new insights into play styles and builds, while also introducing you to other content creators and gamers. The primary objective of this website is to create a unified platform that brings together both Western and Eastern gaming communities, fostering a sense of connection and collaboration across different cultures. By highlighting and showcasing the talents of players and content creators from all corners of the globe, whether they are well-known or just starting out, the site aims to celebrate and promote diverse contributions to the gaming world, regardless of size or region.`}
            </div>
          </section>

          {/* <div className="flex justify-center">
            <PTR />
          </div> */}

          <section className="flex flex-col max-w-[1200px] my-5 mx-auto w-full px-2">
            <div className="flex flex-col p-2 justify-center text-center gap-2">
              <div className="text-gray-400 font-customDiablo font-extrabold text-[22px] sm:text-[32px] px-4">
                Season Menu
              </div>
            </div>
            <Content />
          </section>

          <section className="flex flex-col max-w-[1200px] mt-10 mx-auto w-full px-2 text-center">
            <div className="text-gray-400 font-customDiablo font-extrabold text-[22px] sm:text-[32px] px-4">
              Community Season 5 Pit Stats
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center place-items my-2">
              {/* <CountdownTimer /> */}
              <SeasonStats />
            </div>
          </section>

          <div>
            <SeasonSecondaryStat />
          </div>

          <section className="text-center mb-10">
            <Top10 />
          </section>

          <Footer />
        </section>
      </section>
    </>
  );
}
