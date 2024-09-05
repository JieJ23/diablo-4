import { useData } from "../Hook/DataFetch";
import { convertToSec } from "../DataLogic/ProcessFunction";
import { Spinner } from "@material-tailwind/react";

function convertToTime(s) {
  let min = Math.floor(s / 60);
  let seconds = Math.floor(s % 60);
  return `~ ${min} mins`;
}

export default function SeasonStats() {
  const { posts, loader } = useData();

  const totalPlayers = [...new Set(posts.map((obj) => obj.Player))].length;
  const totalEntries = posts.slice().length;

  let totalTiers = 0;

  for (let i = 0; i < posts.length; i++) {
    let temp = posts[i].Tier;
    totalTiers += temp;
  }

  let totalTime = 0;

  for (let i = 0; i < posts.length; i++) {
    let temp = convertToSec(posts[i]["Time Used"]);
    totalTime += temp;
  }

  return (
    <>
      {loader ? (
        <span className="flex justify-center items-center">
          <Spinner />
        </span>
      ) : (
        <div className="text-white text-center my-5 rounded-xl flex flex-col justify-center p-3 gap-2 bg-gradient-to-t from-[#3b426c] to-blue-gray-900 shadow-[0_0_30px_#28282b]">
          <div>
            <div className="text-[14px] font-customNoto text-orange-200">
              Pit Stats
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-customNoto text-[16px]">
              {totalPlayers}
              <div className="text-[12px] text-orange-200">Total Players</div>
            </div>
            <div className="font-customNoto text-[16px]">
              {totalEntries}
              <div className="text-[12px] text-orange-200">Total Entries</div>
            </div>
            <div className="font-customNoto text-[16px]">
              {totalTiers}
              <div className="text-[12px] text-orange-200">Tiers Cleared</div>
            </div>
            <div className="font-customNoto text-[16px]">
              {convertToTime(totalTime)}
              <div className="text-[12px] text-orange-200">Game Time</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
