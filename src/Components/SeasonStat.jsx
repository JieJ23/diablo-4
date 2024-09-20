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
    <>
      <div className="text-white text-center my-5 rounded-xl flex flex-col justify-center p-3 gap-2 bg-gradient-to-t from-[#3b426c] to-blue-gray-900 shadow-[0_0_30px_#28282b]">
        <div>
          <div className="text-[14px] font-customNoto text-orange-200">
            Pit Stats
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-customNoto text-[12px] sm:text-[16px]">
            {totalPlayers}
            <div className="text-[12px] text-orange-200">Total Players</div>
          </div>
          <div className="font-customNoto text-[12px] sm:text-[16px]">
            {totalEntries}
            <div className="text-[12px] text-orange-200">Total Entries</div>
          </div>
          <div className="font-customNoto text-[12px] sm:text-[16px]">
            {totalTiers}
            <div className="text-[12px] text-orange-200">Total Tiers</div>
          </div>
          <div className="font-customNoto text-[12px] sm:text-[16px]">
            {convertToTime(totalTime)}
            <div className="text-[12px] text-orange-200">Game Time</div>
          </div>
        </div>
      </div>
    </>
  );
}
