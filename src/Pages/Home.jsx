import { CardHorizontal, CardHorizontalRight } from "../Components/Heroes";
import { SubmissionCard } from "../Components/Submission";

export default function Home() {
  return (
    <>
      <section className="h-lvh overflow-x-hidden">
        <div className="fixed bg-[#131111] h-lvh w-full object-cover -z-20" />
        <img
          src="/mainBG.png"
          alt="cover-bg"
          className="fixed h-lvh w-full object-cover -z-10 object-center"
        />

        <div className="text-[28px] text-center my-2 text-[white] font-customDiablo">
          <div>D4 Season 5 Pit</div>
        </div>

        <div className="max-w-[800px] mx-auto my-5 px-2">
          <div className="text-white text-[12px] sm:text-[14px] text-center font-customNoto italic">
            Fan-made Leaderboard for The Pit of Artificers of Diablo 4, Season
            5. The runs listed here are a combination of community member
            submissions and developer contributions. Aim to bridge the
            connection between the western and eastern communities and player
            bases. Separated by language barriers but united through Diablo 4
            gameplay.
          </div>
        </div>

        <div className="flex w-full justify-center mt-5 gap-2">
          <SubmissionCard
            title={`Submit Your Run`}
            link={`https://forms.gle/C3VhTY7HEF3Hudz86`}
            direction="_blank"
          />
        </div>

        <section className="grid grid-cols-1 md:px-8 2xl:w-4/5 max-w-[1200px] justify-center mx-auto text-center my-5">
          <CardHorizontal
            title={`Pit Ladderboard`}
            link={`/Ladderboard`}
            bg={`class4`}
            short={`A collection of ladderboards for Season 5 Pit, showcasing high-tier Pit clears from various players across different communities. Featuring various builds and setups to tackle different Pit tiers across the five major classes. Additional resources, including gameplay footage and guides, to help with your progress this season.`}
          />
          <CardHorizontal
            title={`Build Variation`}
            link={`/Builds`}
            bg={`class2`}
            short={`A compilation of all builds and setups used for high-tier Pit completions. This collection highlights potentially the most ideal or optimal builds for high-tier Pit runs. Please note that performance may vary based on sample size and individual resources.`}
          />
          <CardHorizontal
            title={`Class Blocks`}
            link={`/Puzzle`}
            bg={`class1`}
            short={`As more data is submitted and collected, additional sections and ladderboards will be created or opened. This website will continue to update and expand as long as resources are available.`}
          />
        </section>

        {/* Comment */}
        <div className="text-white font-customSource text-center text-[14px] mt-4 mb-2 italic">
          This website has no affiliation with or endorsement from Activision
          Blizzard, Inc.
        </div>
      </section>
    </>
  );
}
