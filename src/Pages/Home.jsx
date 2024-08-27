import { SubmitCard } from "../Components/Submission";
import Resources from "../Components/Resources";
import { Avatar } from "@material-tailwind/react";
import Content from "../Components/Heroes";

export function Footer() {
  return (
    <div className="text-white bg-black font-customDiablo text-center text-[14px] mt-16 py-5 px-2">
      This website has no affiliation with or endorsement from Activision
      Blizzard, Inc.
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
        <div className="text-[24px] text-center py-4 text-[white] font-customDiablo bg-black flex justify-center items-center gap-2">
          <Avatar src="/diablo4_icon.png" size="sm" />
          <div>Diablo 4 S5 Pit</div>
        </div>

        <section className="text-center mt-4 px-2">
          <div className="text-green-500 font-customDiablo text-[28px]">
            Divided by Class, United by Purpose
          </div>
        </section>
        <div className="flex w-full justify-center px-4">
          <SubmitCard />
        </div>

        <section className="text-center my-10 px-2">
          <div className="text-green-500 font-customDiablo text-[24px]">
            Ladderboard & More
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-4 max-w-[1000px] mx-auto mb-2">
            The main ladderboard, where your rank is determined by how far you
            can advance in the pit. It's sortable by all classes, as well as by
            speed clear at Tier level 101. Additionally, it includes skill
            selections and other detailed stats to help you quickly catch up to
            those ahead.
          </div>
          <Content />
        </section>

        <section className="text-center my-16 px-2">
          <div className="text-green-500 font-customDiablo text-[24px]">
            Resources & Tools
          </div>
          <div className="text-gray-300 font-customNoto text-[12px] px-4 max-w-[1000px] mx-auto mb-2">
            Various websites where players showcase their builds and setups,
            offering valuable insights and guides to enhance your gameplay and
            performance.
          </div>
          <Resources />
        </section>
        <Footer />
      </section>
    </>
  );
}
