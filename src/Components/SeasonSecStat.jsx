import { classColor } from "./Accordion";
import { s5Data } from "../DataLogic/S5Data";

function CreateClassCard({ data }) {
  return (
    <div
      className="text-white text-center rounded-xl flex flex-col justify-center py-3 px-2 gap-2 border-[1px] border-[#131111] shadow-[0_0_10px_black] w-[180px]"
      style={{ backgroundColor: `${classColor(data.class)}99` }}
    >
      <div>
        <div className="text-[16px] font-customDiablo text-gray-400">
          {data.class}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="font-customNoto text-[11px] sm:text-[13px]">
          {data.players}
          <div className="text-[11px] text-gray-400">Players</div>
        </div>
        <div className="font-customNoto text-[11px] sm:text-[13px]">
          {data.highest}

          <div className="text-[11px] text-gray-400">Highest Tier</div>
        </div>
        <div className="font-customNoto text-[11px] sm:text-[13px]">
          {data.played}

          <div className="text-[11px] text-gray-400">Entries</div>
        </div>
        <div className="font-customNoto text-[11px] sm:text-[13px]">
          {data.totalofpercent}%
          <div className="text-[11px] text-gray-400">Of Total</div>
        </div>
      </div>
    </div>
  );
}

export default function SeasonSecondaryStat() {
  const allClasses = [...new Set(s5Data.map((obj) => obj.Class))];

  const displayData = [];

  const sortedTierData = s5Data
    .slice()
    .sort((a, b) => (+a.Tier > +b.Tier ? -1 : 1));

  for (let i = 0; i < allClasses.length; i++) {
    let totalRuns = sortedTierData.filter((obj) => obj.Class === allClasses[i]);
    let highestTier = totalRuns[0].Tier;
    let totalPlayers = [...new Set(totalRuns.map((obj) => obj.Player))];
    let percent = Math.round((totalRuns.length / sortedTierData.length) * 100);
    let obj = {
      class: totalRuns[0].Class,
      played: totalRuns.length,
      players: totalPlayers.length,
      highest: highestTier,
      totalofpercent: percent,
    };
    displayData.push(obj);
  }

  console.log(displayData);

  return (
    <section className="flex flex-wrap justify-start gap-2 px-2 max-w-[1200px] mx-auto">
      {displayData.map((obj) => (
        <CreateClassCard data={obj} />
      ))}
    </section>
  );
}
