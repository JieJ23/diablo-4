import PitLadder from "../Components/PitLadder";
import { HomeDraw } from "./HomeDraw";

import Navigation from "../Button/NavHead";
import { Footer } from "./Home";
export default function Ladderboard() {
  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131111] h-lvh w-full object-cover -z-20" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />
      <div className="h-full flex flex-col justify-between">
        <Navigation />
        <div className="w-full max-w-[1200px] flex justify-between mx-auto px-6 mt-5">
          <HomeDraw />
        </div>

        <PitLadder />
        <Footer />
      </div>
    </section>
  );
}
