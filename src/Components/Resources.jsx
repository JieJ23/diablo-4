import { Link } from "react-router-dom";
import { Card } from "@material-tailwind/react";

const websiteObj = [
  {
    title: `Mobalytics GG`,
    summary: `Guide/Build`,
    link: `https://mobalytics.gg/diablo-4`,
  },
  {
    title: `Wowhead`,
    summary: `Guide/Build`,
    link: `https://www.wowhead.com/diablo-4`,
  },
  {
    title: `Maxroll GG`,
    summary: `Guide/Build`,
    link: `https://maxroll.gg/d4`,
  },
  {
    title: `D4Builds GG`,
    summary: `Guide/Build`,
    link: `https://d4builds.gg/`,
  },
  {
    title: `CN D2core`,
    summary: `Guide/Build`,
    link: `https://www.d2core.com`,
  },
  {
    title: `KR D4 Inven`,
    summary: `Guide/Build`,
    link: `https://diablo4.inven.co.kr/db/`,
  },
];

export function CardLink2({ title, link, summary }) {
  return (
    <Card className="bg-gradient-to-tl from-gray-900 to-black border-double border-[3px] border-[gray] group select-none min-w-[100px] h-[75px] p-3 group hover:scale-105 duration-200 ease-in transition-all hover:shadow-[0_0_20px_#A3EBB1]">
      <Link to={link} target="_blank" className="h-full">
        <section className="flex flex-col justify-center h-full items-center">
          <div className="text-white font-customNoto text-[16px] group-hover:text-green-500 duration-200 ease-in transition-all">
            {title}
          </div>
          <div className="text-white font-customSource italic text-[12px]">
            {summary}
          </div>
        </section>
      </Link>
    </Card>
  );
}

export default function Resources() {
  return (
    <section className="flex flex-wrap max-w-[1000px] px-2 gap-2 justify-center mx-auto">
      {websiteObj.map((obj) => (
        <CardLink2 title={obj.title} summary={obj.summary} link={obj.link} />
      ))}
      {/* <CardLink2
        title={`D2`}
        summary={`Guide & Planner`}
        link={`https://www.google.com/`}
      />
      <CardLink2
        title={`D2`}
        summary={`Guide & Planner`}
        link={`https://www.google.com/`}
      />
      <CardLink2
        title={`D2`}
        summary={`Guide & Planner`}
        link={`https://www.google.com/`}
      />
      <CardLink2
        title={`D2`}
        summary={`Guide & Planner`}
        link={`https://www.google.com/`}
      />
      <CardLink2
        title={`D2`}
        summary={`Guide & Planner`}
        link={`https://www.google.com/`}
      />
      <CardLink2
        title={`D2`}
        summary={`Guide & Planner`}
        link={`https://www.google.com/`}
      /> */}
    </section>
  );
}
