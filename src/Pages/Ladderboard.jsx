import PitLadder from "../Components/PitLadder";
import { Tabs } from "../Components/Breadcrumbs";
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
      <Tabs title={`Ladderboard`} />

      <PitLadder />
      <Footer />
    </section>
  );
}
