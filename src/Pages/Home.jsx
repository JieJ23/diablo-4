import { SubmitCard } from "../Components/Submission";
import Content from "../Components/Heroes";
import CountdownTimer from "../Components/Countdown";
import Navigation from "../Button/NavHead";
import Top10 from "../Components/HomeCarol";
import SeasonStats from "../Components/SeasonStat";

export function Footer() {
  return (
    <div className="mt-15">
      <div className="text-white font-customDiablo text-center text-[14px] px-2 pt-2">
        This website has no affiliation with or endorsement from Activision
        Blizzard, Inc.
      </div>
      <div className="text-white font-customNoto text-center text-[12px] px-2 pb-2">
        © 2024 CY ®
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

          <section className="text-start px-6 max-w-[1200px] mx-auto my-10 rounded-lg">
            <div className="text-[#868fed] font-customDress font-bold text-[28px] sm:text-[32px] mb-2">
              Welcome to Diablo 4 Pit
            </div>
            <div className="whitespace-pre-line text-white font-customNoto text-[14px]">
              {`A website dedicated to documenting pit runs for each season. Launched in Season 5, the Season of the Infernal Horde, our platform offers the community a competitive leaderboard, ranking participants based on the fastest completion times and, more significantly, the highest tier completions. The leaderboards may offer new insights into play styles and builds, while also introducing you to other content creators and gamers.`}
            </div>
          </section>

          <div className="flex w-full justify-center my-5">
            <SubmitCard />
          </div>

          <section className="text-center my-5 px-2">
            <Content />
          </section>

          <section className="flex flex-col max-w-[1200px] mt-10 mx-auto w-full px-4">
            <div className="text-[#868fed] font-customDress font-bold text-[22px] sm:text-[28px] mb-2">
              Season Of The Infernal Horde: Pit Ladder
            </div>
            <div className="whitespace-pre-line text-white font-customNoto text-[14px]">
              Countdown to the conclusion of submissions for the seasonal
              leaderboard. Following this, we will present the results for the
              top 10 players in each respective class, along with additional
              statistics derived from community entries. Afterward, preparations
              will begin for the new season and ladder, with everything reset
              for a fresh start.
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
