import { Avatar, Card, Typography, Tooltip } from "@material-tailwind/react";
import { ReturnSkillIcon } from "../DataLogic/ProcessFunction";
import { convertToSec } from "../DataLogic/ProcessFunction";
import { classColor } from "./Accordion";

export default function TopOfEachClass({ objData }) {
  const sortedData = objData
    .slice()
    .sort((a, b) =>
      convertToSec(a["Time Used"]) > convertToSec(b["Time Used"]) ? 1 : -1
    )
    .sort((a, b) => (a.Tier > b.Tier ? -1 : 1));

  const allClasses = [...new Set(sortedData.map((obj) => obj.Class))];
  const filterRankOnlyRuns = sortedData.filter((obj) => obj.Rank > 0);

  const top1EachClass = [];

  for (let i = 0; i < allClasses.length; i++) {
    let temp = filterRankOnlyRuns.filter((obj) => obj.Class === allClasses[i]);
    let temp1st = temp[0];
    top1EachClass.push(temp1st);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-evenly p-2 gap-2">
      {top1EachClass.map((obj, index) => (
        <Card
          className="p-2 w-full min-h-[200px] sm:min-h-[150px] relative bg-transparent shadow-[0_0_10px_black] border-[2px] border-[#28282b]"
          style={{ backgroundColor: `${classColor(obj.Class)}66` }}
        >
          {/* <div className="absolute bg-[black] h-full w-full top-0 left-0 object-cover -z-10 rounded-xl" /> */}
          <img
            src={`/t${index + 1}.gif`}
            alt="cover-bg"
            className="absolute h-full w-full top-0 left-0 object-cover object-center -z-10 rounded-xl opacity-65"
          />
          {/* Divider */}
          <div className="h-full flex flex-col items-center justify-center">
            <Typography className="text-[white] font-customDiablo text-[12px]">
              {obj.Class}
            </Typography>
            <Avatar src={`/ClassesIcon/${obj.Class}.png`} />
            <Typography className="text-white font-customDress">
              {obj.Player}
            </Typography>
            <Typography className="text-[white] font-customNoto font-bold text-[14px]">
              Tier {obj.Tier}
            </Typography>

            <div className="flex flex-wrap gap-[4px] sm:gap-[2px] justify-center my-2">
              {ReturnSkillIcon(obj["Skills Used"]).map((item) => (
                <Tooltip
                  content={
                    <div className="px-2">
                      <Typography
                        className="font-customDiablo text-[14px]"
                        color="white"
                      >
                        {item}
                      </Typography>
                    </div>
                  }
                  className="bg-black select-none border-[1px]"
                >
                  <Avatar
                    src={`/Skills/${item}.png`}
                    variant="rounded"
                    size="xs"
                    draggable={false}
                    className="shadow-[0_0_10px_teal] rounded-sm"
                    loading="lazy"
                  />
                </Tooltip>
              ))}
            </div>
          </div>
          {/* Divider */}
        </Card>
      ))}
    </div>
  );
}
