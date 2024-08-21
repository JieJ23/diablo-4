import { Card1 } from "../Components/Heroes";
import { SubmissionCard } from "../Components/Submission";
import Carol from "../Components/Carousel";
import Resources from "../Components/Resources";

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
          <div>Diablo 4 S5 Pit</div>
        </div>

        <div className="flex w-full justify-center mt-5 gap-2">
          <SubmissionCard
            title={`Submit Your Run`}
            link={`https://forms.gle/C3VhTY7HEF3Hudz86`}
            direction="_blank"
          />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6  px-4 max-w-[1000px] justify-center mx-auto text-center my-5">
          <Card1
            title={`Pit Ladderboard`}
            summary={`Main ladderboards for The Pit of Artificers, showcasing high-tier clears from various players across different communities.`}
            directs={`/Ladderboard`}
            bg={`class4`}
          />
          <Card1
            title={`Build Variation`}
            summary={`All build variations and setups used for high-tier Pit completions. This collection highlights the most ideal and/or optimal builds used high-tier Pit runs.`}
            directs={`/Builds`}
            bg={`class2`}
          />
          <Card1
            title={`Class Blocks`}
            summary={`Block builds: comprising all entries showcasing every class used and their popularity. Visualizing the pit balance environment of the class through pit clears.`}
            directs={`/Puzzle`}
            bg={`class1`}
          />
        </section>

        <section className="text-center mt-16 mb-2 px-2">
          <div className="text-green-400 font-customDiablo text-[20px]">
            Coming Soon: New Spiritborn Class.
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-8 max-w-[600px] mx-auto">
            Calls upon the unique strengths of Jaguar, Gorilla, Eagle, and
            Centipede Spirit Guardians to overcome any nightmare the Burning
            Hells throws their way.
          </div>
        </section>

        <section className="px-2 gap-5 p-0 max-w-[1000px] h-[500px] mx-auto rounded-xl overflow-hidden">
          <Carol />
        </section>

        <section className="text-center mt-16 px-2">
          <div className="text-green-400 font-customDiablo text-[20px]">
            Resources & Tools
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-8 max-w-[600px] mx-auto mb-4">
            Various websites where players showcase their builds and setups,
            offering valuable insights and guides to enhance your gameplay and
            performance.
          </div>
          <Resources />
        </section>

        <div className="text-white font-customDiablo text-center text-[14px] mt-10 mb-2 px-2">
          This website has no affiliation with or endorsement from Activision
          Blizzard, Inc.
        </div>
      </section>
    </>
  );
}
