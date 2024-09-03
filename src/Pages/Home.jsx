import { SubmitCard } from "../Components/Submission";
import Content from "../Components/Heroes";
import CountdownTimer from "../Components/Countdown";
import Navigation from "../Button/NavHead";

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
            <div className="text-[#868fed] font-customSource font-bold text-[36px] mb-2">
              Welcome to Diablo 4 Pit
            </div>
            <div className="whitespace-pre-line text-white font-customNoto text-[14px]">
              {`A website dedicated to documenting pit runs for each season. Launched in Season 5, the Season of the Infernal Horde, our platform offers the community a competitive leaderboard, ranking participants based on the fastest completion times and, more significantly, the highest tier completions. The leaderboards may offer new insights into play styles and builds, while also introducing you to other content creators and gamers.`}
            </div>
          </section>

          <section className="flex flex-col max-w-[1200px] mx-auto w-full px-4">
            <div className="whitespace-pre-line text-white font-customNoto text-[14px]">
              Countdown to the conclusion of submissions for the seasonal
              leaderboard. Following this, we will present the results for the
              top 10 players in each respective class, along with additional
              statistics derived from community entries.
            </div>

            <div className="flex justify-start gap-x-2 px-0">
              <div className="text-white font-customNoto text-center my-5 w-full h-[67px] max-w-[170px] sm:max-w-[200px] bg-[#31376fcc] rounded-xl flex justify-center p-2 items-center text-[16px] whitespace-pre-line">
                {`Season Of The
                Infernal Horde`}
              </div>
              <CountdownTimer />
            </div>
          </section>

          <div className="flex w-full justify-center my-5">
            <SubmitCard />
          </div>

          <section className="text-center my-7 px-2">
            <Content />
          </section>

          <Footer />
        </section>
      </section>
    </>
  );
}
