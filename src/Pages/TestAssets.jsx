import { Avatar, Tooltip, Typography } from "@material-tailwind/react";
import { barb, druid, necro, rogue, sorc } from "../DataLogic/AllSkills";

function ReturnAssets({ arr }) {
  return (
    <div className="flex flex-wrap py-5 gap-1 mx-auto w-[800px]">
      {arr.map((item) => (
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
            size="md"
            className="select-none"
            draggable={false}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default function TestAssets() {
  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131313] h-lvh w-full object-cover -z-10" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />

      <ReturnAssets arr={barb} />
      <ReturnAssets arr={druid} />
      <ReturnAssets arr={necro} />
      <ReturnAssets arr={rogue} />
      <ReturnAssets arr={sorc} />
    </section>
  );
}
