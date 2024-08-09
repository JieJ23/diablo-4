import {
  Card,
  CardFooter,
  Typography,
  List,
  ListItem,
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { useData } from "../Hook/DataFetch";
import DataLoadingLoader from "../Hook/Loader";
import { useState } from "react";
import AccordWrap from "./CustomWrap/AccordCustom";

const testingSkills = [
  `fire_bolt`,
  `fireball`,
  `firewall`,
  `flame_shield`,
  `frost_bolt`,
  `teleport`,
];

export default function PitLadder() {
  const { posts, loader } = useData();
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  const displayData = posts;

  return (
    <>
      {loader ? (
        <DataLoadingLoader />
      ) : (
        <AccordWrap>
          <Card className="w-full mx-auto max-w-[1000px] my-10 px-2 bg-transparent">
            <div className="text-[48px] text-center my-5 text-[white] font-customDiablo">
              Diablo 4: The Pit
            </div>

            <div className="p-2 mb-1 flex">
              <div className="text-[white] text-[16px] flex-1 text-center font-customDiablo ">
                Player
              </div>
              <div className="text-[white] text-[16px] flex-1 text-center font-customDiablo ">
                Class
              </div>
              <div className="text-[white] text-[16px] flex-1 text-center font-customDiablo ">
                Time
              </div>
              <div className="text-[white] text-[16px] flex-1 text-center font-customDiablo ">
                Tier
              </div>
            </div>

            {displayData.map((obj, index) => (
              <div
                className={`${
                  index % 2 === 0 ? `bg-[#222222cc]` : `bg-[#141414cc]`
                } mb-1 rounded-lg backdrop-blur-sm relative`}
              >
                <Accordion open={open === index}>
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="flex justify-between"
                  >
                    <div className="absolute top-2 left-2 text-[12px] font-[Roberto]">
                      {index + 1}
                    </div>
                    <div className="flex-1 text-center font-customDiablo text-[16px]">
                      {obj.Player}
                    </div>
                    <div className="flex-1 flex justify-center">
                      <Avatar src={`/Classes/${obj.Class}.png`} />
                    </div>
                    <div className="flex-1 text-center font-customDiablo text-[18px]">
                      {obj.Time}
                    </div>
                    <div className="flex-1 text-center font-customDiablo text-[18px]">
                      {obj.Tier}
                    </div>
                  </AccordionHeader>

                  <AccordionBody className="flex justify-evenly">
                    <div>
                      <div className="text-center font-customDiablo text-[16px]">
                        Build: {obj.Build}
                      </div>
                      <div className="flex-1 flex flex-wrap gap-1 justify-center w-full">
                        {testingSkills.map((item) => (
                          <Avatar
                            src={`/Skills/${item}.jpg`}
                            variant="rounded"
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-5 justify-between">
                      <div className="flex flex-col items-center p-2">
                        <a
                          href="https://maxroll.gg/d4/planner/"
                          target="_blank"
                          className="flex-1 font-customDiablo text-[16px] text-red-500"
                        >
                          Video Link
                        </a>
                        <a
                          href="https://maxroll.gg/d4/planner/"
                          target="_blank"
                          className="flex-1 font-customDiablo text-[16px] text-light-blue-500"
                        >
                          Build Link
                        </a>
                      </div>

                      <div className="hidden sm:block p-2">
                        <div className="flex-1 text-center font-customDiablo text-[18px]">
                          {obj.Mode === "SC" ? "Softcore" : "Hardcore"}
                        </div>
                        <div className="flex-1 text-center font-customDiablo text-[18px]">
                          8/6/2024
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
            ))}
          </Card>
        </AccordWrap>
      )}
    </>
  );
}
