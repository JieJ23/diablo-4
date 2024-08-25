import { Card } from "@material-tailwind/react";

import AccordWrap from "./CustomWrap/AccordCustom";
import DuoAccordionMain from "./DuoAccordion";
import DataLoadingLoader from "../Hook/Loader";

export default function DuoPitLadder({ data, process }) {
  const sortDisplay = data.slice().sort((a, b) => (a.Tier > b.Tier ? -1 : 1));

  return (
    <>
      {process ? (
        <DataLoadingLoader />
      ) : (
        <div className="mt-5">
          <div className="absolute top-1 left-1 text-yellow-500 font-customNoto text-[10px] -z-10">
            {data.length}
          </div>
          <AccordWrap>
            <Card
              className="w-full mx-auto max-w-[1200px] px-1 bg-transparent"
              shadow={false}
            >
              {sortDisplay.map((obj, index) => (
                <div
                  className={`${
                    index % 2 === 0 ? `bg-[#222831cc]` : `bg-[#141414cc]`
                  } mb-1 rounded-lg backdrop-blur-sm relative border-[2px] border-[#131111]`}
                >
                  <DuoAccordionMain obj={obj} />
                </div>
              ))}
            </Card>
          </AccordWrap>
        </div>
      )}
    </>
  );
}
