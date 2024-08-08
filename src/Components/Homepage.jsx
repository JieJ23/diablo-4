import DataLoadingLoader from "../Hook/Loader";
import PitLadder from "./PitLadder";

export default function Homepage() {
  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131313] h-lvh w-full object-cover -z-10" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />

      <PitLadder />
    </section>
  );
}
