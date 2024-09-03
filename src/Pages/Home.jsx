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

          <CountdownTimer />

          <section className="text-center px-2">
            <div className="text-white font-customDiablo text-[20px] md:text-[24px]">
              Divided by Class, United by Purpose
            </div>
          </section>
          <div className="flex w-full justify-center px-4">
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
