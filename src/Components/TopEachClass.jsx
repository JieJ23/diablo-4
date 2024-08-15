import { Avatar, Card, Typography, Tooltip } from "@material-tailwind/react";
import { ReturnSkillIcon } from "../DataLogic/ProcessFunction";

export default function TopOfEachClass({ objData }) {
  const allClasses = [...new Set(objData.map((obj) => obj.Class))];
  const filterRankOnlyRuns = objData.filter((obj) => obj.Rank > 0);

  const top1EachClass = [];

  for (let i = 0; i < allClasses.length; i++) {
    let temp = filterRankOnlyRuns.filter((obj) => obj.Class === allClasses[i]);
    let temp1st = temp[0];
    top1EachClass.push(temp1st);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-evenly p-2 gap-2">
      {top1EachClass.map((obj, index) => (
        <Card className="p-2 w-full min-h-[150px] relative bg-transparent shadow-[0_0_10px_black] border-[2px] border-[#28282b]">
          <div className="absolute bg-[black] h-full w-full top-0 left-0 object-cover -z-10 rounded-xl" />
          <img
            src={`/bg/class${index + 1}.png`}
            alt="cover-bg"
            className="absolute h-full w-full top-0 left-0 object-cover -z-10 rounded-xl opacity-40"
          />
          {/* Divider */}
          <div className="h-full flex flex-col items-center justify-center">
            <Typography className="text-[white] font-customDiablo text-[12px]">
              {obj.Class}
            </Typography>
            <Avatar src={`/ClassesIcon/${obj.Class}.png`} />
            <Typography className="text-white font-customDiablo">
              {obj.Player}
            </Typography>
            <Typography className="text-[yellow] font-customDiablo text-[14px]">
              Tier {obj.Tier}
            </Typography>

            <div className="flex gap-2 justify-center my-2">
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
                  className="bg-black select-none p-1 border-[1px]"
                >
                  <Avatar
                    src={`/Skills/${item}.png`}
                    variant="rounded"
                    size="xs"
                    draggable={false}
                    className="shadow-[0_0_5px_red]"
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
