import { Card1 } from "../Components/Heroes";
import { SubmissionCard } from "../Components/Submission";
import Carol from "../Components/Carousel";

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
            summary={`Block builds: comprising all entries showcasing every class used and their popularity. Additionally, it includes the classes that perform most optimally for high-tier pit.`}
            directs={`/Puzzle`}
            bg={`class1`}
          />
        </section>

        {/* <section className="p-0 max-w-[1200px] mx-auto border-[1px] border-white h-[500px] rounded-xl">
          <Carol />
        </section> */}

        <div className="text-white font-customDiablo text-center text-[14px] mt-4 mb-2">
          This website has no affiliation with or endorsement from Activision
          Blizzard, Inc.
        </div>
      </section>
    </>
  );
}
