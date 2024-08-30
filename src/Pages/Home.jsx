import { SubmitCard } from "../Components/Submission";
import Resources from "../Components/Resources";
import { Avatar } from "@material-tailwind/react";
import Content from "../Components/Heroes";
import CountdownTimer from "../Components/Countdown";

export function Footer() {
  return (
    <div className="mt-15">
      <div className="text-white bg-black font-customDiablo text-center text-[14px] px-2 pt-2">
        This website has no affiliation with or endorsement from Activision
        Blizzard, Inc.
      </div>
      <div className="text-white bg-black font-customNoto text-center text-[14px] px-2 pb-2">
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
        <div className="text-[24px] text-center py-4 text-[white] font-customDiablo bg-black flex justify-center items-center gap-2">
          <Avatar src="/diablo4_icon.png" size="sm" />
          <div>Diablo 4 Pit</div>
        </div>

        <CountdownTimer />

        <section className="text-center mt-5 px-2">
          <div className="text-white font-customDiablo text-[20px] md:text-[24px]">
            Divided by Class, United by Purpose
          </div>
        </section>
        <div className="flex w-full justify-center px-4">
          <SubmitCard />
        </div>

        <section className="text-center my-14 px-2">
          <div className="text-white font-customDiablo text-[22px] md:text-[32px]">
            Ladderboard & More
          </div>
          <Content />
        </section>

        <section className="text-center my-14 px-2">
          <div className="text-white font-customDiablo text-[22px] md:text-[32px]">
            Resources & Tools
          </div>
          <Resources />
        </section>
        <Footer />
      </section>
    </>
  );
}
