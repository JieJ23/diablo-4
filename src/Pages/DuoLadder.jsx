import { Tabs } from "../Components/Breadcrumbs";
import DuoPitLadder from "../Components/DuoPitLadder";
import { useData2 } from "../Hook/DuoDateFetch";

export default function DuoLadderboard() {
  const { posts, loader } = useData2();

  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131111] h-lvh w-full object-cover -z-20" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />
      <Tabs title={`Duo Ladderboard`} />

      <DuoPitLadder data={posts} process={loader} />
    </section>
  );
}
