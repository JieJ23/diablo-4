import { convertToSec } from "../DataLogic/ProcessFunction";

import { s5Data } from "../DataLogic/S5Data";

function convertToTime(s) {
  let min = Math.floor(s / 60);
  let seconds = Math.floor(s % 60);
  return `+${min}`;
}

export default function SeasonStats() {
  const totalPlayers = [...new Set(s5Data.map((obj) => obj.Player))].length;
  const totalEntries = s5Data.slice().length;

  let totalTiers = 0;

  for (let i = 0; i < s5Data.length; i++) {
    let temp = +s5Data[i].Tier;
    totalTiers += temp;
  }

  let totalTime = 0;

  for (let i = 0; i < s5Data.length; i++) {
    let temp = convertToSec(s5Data[i]["Time Used"]);
    totalTime += temp;
  }

  return (
    <>
      <div className="text-white text-center rounded-xl flex flex-col justify-between py-3 bg-gradient-to-t to-[#090808] from-[#18191f] shadow-[0_0_10px_black] ">
        <div className="text-[16px] font-customDiablo text-center text-[#2adfa6]">
          Total Players
        </div>
        <div className="flex justify-center gap-2 text-[32px] font-[Roberto] font-semibold">
          <div className="text-[#2adfa6]">{totalPlayers}</div>
        </div>
        <div className="text-[11px] font-customNoto text-center text-[#2adfa6]">
          Unique Player Count
        </div>
      </div>
      <div className="text-white text-center rounded-xl flex flex-col justify-between py-3 bg-gradient-to-t to-[#090808] from-[#18191f] shadow-[0_0_10px_black] ">
        <div className="text-[16px] font-customDiablo text-center text-[#f346ab]">
          Total Entries
        </div>
        <div className="flex justify-center gap-2 text-[32px] font-[Roberto] font-semibold">
          <div className="text-[#f346ab]">{totalEntries}</div>
        </div>
        <div className="text-[11px] font-customNoto text-center text-[#f346ab]">
          Available Gameplay
        </div>
      </div>
      <div className="text-white text-center rounded-xl flex flex-col justify-between py-3 bg-gradient-to-t to-[#090808] from-[#18191f] shadow-[0_0_10px_black] ">
        <div className="text-[16px] font-customDiablo text-center text-[#ea8c28]">
          Total Time
        </div>
        <div className="flex justify-center gap-2 text-[32px] font-[Roberto] font-semibold">
          <div className="text-[#ea8c28]">{convertToTime(totalTime)}</div>
        </div>
        <div className="text-[11px] font-customNoto text-center text-[#ea8c28]">
          Minutes Accumulated
        </div>
      </div>
      <div className="text-white text-center rounded-xl flex flex-col justify-between py-3 bg-gradient-to-t to-[#090808] from-[#18191f] shadow-[0_0_10px_black] ">
        <div className="text-[16px] font-customDiablo text-center text-[#5b7cdc]">
          Total Tiers
        </div>
        <div className="flex justify-center gap-2 text-[32px] font-[Roberto] font-semibold">
          <div className="text-[#5b7cdc]">{totalTiers}</div>
        </div>
        <div className="text-[11px] font-customNoto text-center text-[#5b7cdc]">
          Levels Conquered
        </div>
      </div>
    </>
  );
}
