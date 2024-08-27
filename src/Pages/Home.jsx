import { Card1 } from "../Components/Heroes";
import { SubmissionCard } from "../Components/Submission";
import Carol from "../Components/Carousel";
import Resources from "../Components/Resources";
import { Avatar } from "@material-tailwind/react";

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

        <div className="text-[24px] text-center py-4 text-[white] font-customDiablo bg-black flex justify-center items-center gap-2">
          <Avatar src="/diablo4_icon.png" size="sm" />
          <div>Diablo 4 S5 Pit</div>
        </div>

        <section className="text-center mt-4 px-2">
          <div className="text-green-400 font-customDiablo text-[28px]">
            Divided by Class, United by Purpose
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-4 max-w-[800px] mx-auto mb-2">
            Submit and share your gameplay. Your journey deserves to be
            remembered.
          </div>
        </section>
        <div className="flex w-full justify-center gap-2">
          <SubmissionCard
            title={`Submit Your Run`}
            link={`https://docs.google.com/spreadsheets/d/10WX_1NchCrfJuLMzU7PBB2iOWI98TmmPwtd_WCglpyo/pubhtml?gid=1154546550&single=true`}
            direction="_blank"
          />
        </div>

        <section className="text-center mt-10 px-2">
          <div className="text-green-400 font-customDiablo text-[24px]">
            Ladderboard & More
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-4 max-w-[1000px] mx-auto mb-2">
            The main ladderboard, where your rank is determined by how far you
            can advance in the pit. It's sortable by all classes, as well as by
            speed clear at Tier level 101. Additionally, it includes skill
            selections and other detailed stats to help you quickly catch up to
            those ahead.
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6  px-4 max-w-[1200px] justify-center mx-auto text-center mb-10">
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
        {/*  */}

        {/* <section className="text-center mt-20 px-2">
          <div className="text-yellow-500 font-customDiablo text-[24px]">
            Debuting Ladderboard
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-4 max-w-[800px] mx-auto mb-1">
            Introducing a new leaderboard for players who want to duo with a
            friend or partner to push the depths of the pit together.
          </div>
          <div className="text-orange-200 font-customNoto text-[12px] px-4 max-w-[800px] mx-auto mb-2">
            Because of the structure of these entries, this leaderboard will be
            entirely driven by player and community submissions, with no
            contributions from the developer.
          </div>
        </section>
        <section className="flex gap-x-4 gap-y-6  px-4 max-w-[800px] justify-center mx-auto text-center mb-16">
          <Card1
            title={`Duo Pit`}
            summary={`The secondary leaderboard ranks you based on how far you can advance in the pit. Join forces with a friend to showcase your coordination and teamwork as you climb the tiers together. Categories are mainly divided into two types: mirror, where both players use the same classes, and mixed, where different classes are used.`}
            directs={`/DuoLadderboard`}
            bg={`class5`}
          />
        </section> */}
        {/*  */}
        {/* <section className="text-center mt-20 mb-2 px-2">
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
        </section> */}

        <section className="text-center mt-10 px-2">
          <div className="text-green-400 font-customDiablo text-[24px]">
            Resources & Tools
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-4 max-w-[800px] mx-auto mb-4">
            Various websites where players showcase their builds and setups,
            offering valuable insights and guides to enhance your gameplay and
            performance.
          </div>
          <Resources />
        </section>

        <div className="text-white bg-black font-customDiablo text-center text-[14px] mt-16 py-5 px-2">
          This website has no affiliation with or endorsement from Activision
          Blizzard, Inc.
        </div>
      </section>
    </>
  );
}
