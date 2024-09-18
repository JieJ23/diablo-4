import { SubmitCard } from "../Components/Submission";
import Content from "../Components/Heroes";
import CountdownTimer from "../Components/Countdown";
import Navigation from "../Button/NavHead";
import Top10 from "../Components/HomeCarol";
import SeasonStats from "../Components/SeasonStat";
import { Link } from "react-router-dom";

import { HomeDraw } from "./HomeDraw";

import { Avatar } from "@material-tailwind/react";

import { PTR } from "../Components/PTR";

export function Footer() {
  return (
    <div className="mt-15 py-5 flex flex-col gap-1 select-none">
      <div className="flex justify-center gap-4">
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
      </div>
      <Link
        to={`https://discord.gg/HdpcEwAepY`}
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

          <div className="w-full max-w-[1200px] flex justify-between mx-auto px-6 mt-5">
            <HomeDraw />
          </div>

          <section className="text-start px-6 max-w-[1200px] mx-auto my-10 rounded-lg">
            <div className="text-[#868fed] font-customDress text-[28px] sm:text-[32px] mb-2 uppercase">
              Welcome to Diablo 4 Pit
            </div>
            <div className="whitespace-pre-line text-gray-400 font-customNoto text-[13px]">
              {`A website dedicated to documenting pit runs for each season. Launched in Season 5, the Season of the Infernal Horde, our platform offers the community a competitive leaderboard, ranking participants based on the fastest completion times and, more significantly, the highest tier completions. The leaderboards may offer new insights into play styles and builds, while also introducing you to other content creators and gamers. The primary objective of this website is to create a unified platform that brings together both Western and Eastern gaming communities, fostering a sense of connection and collaboration across different cultures. By highlighting and showcasing the talents of players and content creators from all corners of the globe, whether they are well-known or just starting out, the site aims to celebrate and promote diverse contributions to the gaming world, regardless of size or region.`}
            </div>
          </section>

          <div className="flex justify-center">
            <PTR />
          </div>

          <div className="flex justify-center">
            <SubmitCard />
          </div>

          <section className="text-center my-5 px-2">
            <Content />
          </section>

          <section className="flex flex-col max-w-[1200px] mt-10 mx-auto w-full px-4">
            <div className="text-[#868fed] font-customDress text-[22px] sm:text-[28px] mb-2">
              Season Of The Infernal Horde: Pit Ladder
            </div>
            <div className="whitespace-pre-line font-customNoto text-[13px] text-gray-400">
              As we approach the final countdown to the end of the season, the
              conclusion of submissions for the seasonal leaderboard is drawing
              near. Below, you'll find an overview of key statistics reflecting
              the community's participation throughout the season. These stats
              include the total number of players who have taken part, the
              overall entries submitted, the combined tiers completed across all
              submissions, and finally, the cumulative time spent by players in
              clearing those tiers. This data offers a comprehensive look at the
              collective efforts and achievements of everyone involved during
              the season. If you're looking for more detailed insights, feel
              free to explore the Class Build section, where you can find
              comprehensive information and overviews for each class
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-[500px]">
              <CountdownTimer />
              <SeasonStats />
            </div>
          </section>

          <section className="text-center mb-10">
            <Top10 />
          </section>

          <Footer />
        </section>
      </section>
    </>
  );
}
