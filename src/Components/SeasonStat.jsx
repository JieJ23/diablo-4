import { convertToSec } from "../DataLogic/ProcessFunction";

import { s5Data } from "../DataLogic/S5Data";

function convertToTime(s) {
  let min = Math.floor(s / 60);
  let seconds = Math.floor(s % 60);
  return `+${min} m`;
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
    <div className="text-white text-center rounded-xl flex flex-col justify-center py-3 px-2 gap-2 bg-gradient-to-tr from-[#1c2034] to-[#0a1337] shadow-[0_0_10px_black] border-[1px] border-[#131111]">
      <div>
        <div className="text-[16px] font-customDiablo text-gray-400">
          Overall
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-customNoto text-[12px] sm:text-[13px]">
          {totalPlayers}
          <div className="text-[11px] text-gray-400">Players</div>
        </div>
        <div className="font-customNoto text-[11px] sm:text-[13px]">
          {totalEntries}
          <div className="text-[11px] text-gray-400">Entries</div>
        </div>
        <div className="font-customNoto text-[11px] sm:text-[13px]">
          {totalTiers}
          <div className="text-[11px] text-gray-400">Tiers</div>
        </div>
        <div className="font-customNoto text-[11px] sm:text-[13px]">
          {convertToTime(totalTime)}
          <div className="text-[11px] text-gray-400">Time</div>
        </div>
      </div>
    </div>
  );
}
