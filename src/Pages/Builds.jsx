import { useState, useRef } from "react";
import { ReturnSkillIcon } from "../DataLogic/ProcessFunction";
import {
  Typography,
  Tooltip,
  Avatar,
  Input,
  Button,
} from "@material-tailwind/react";

import { s5Data } from "../DataLogic/S5Data";

import { Footer } from "./Home";
import Navigation from "../Button/NavHead";

export default function Builds() {
  const [tier, setTier] = useState(null);
  const inputRef = useRef(null);
  // const onChange = ({ target }) => setTier(target.value);

  function handleSortTier() {
    setTier(inputRef.current.value);
  }

  const allBuildCount = [];

  const allAvailableClass = [...new Set(s5Data.map((obj) => obj.Class))].sort();

  //
  function findTotalOfClass(t) {
    const temp = s5Data.filter((obj) => obj.Class === t && obj.Tier >= tier);
    return temp.length;
  }

  function addClassSetUp(c) {
    const tempBuildCount = [];
    const tempClass = s5Data.filter(
      (obj) => obj.Class === c && obj.Tier >= tier
    );
    const tempAllBuild = [
      ...new Set(tempClass.map((obj) => obj["Skills Used"])),
    ];

    for (let i = 0; i < tempAllBuild.length; i++) {
      let count = 0;
      for (let y = 0; y < tempClass.length; y++) {
        if (tempClass[y]["Skills Used"] === tempAllBuild[i]) {
          count += 1;
        }
      }
      let pairValue = {
        build: tempAllBuild[i],
        played: count,
        class: tempClass[i].Class,
      };
      tempBuildCount.push(pairValue);
    }
    const finalized = tempBuildCount
      .slice()
      .sort((a, b) => (a.played > b.played ? -1 : 1));

    allBuildCount.push(finalized);
  }

  for (let i = 0; i < allAvailableClass.length; i++) {
    addClassSetUp(allAvailableClass[i]);
  }
  // console.log(allBuildCount);

  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131313] h-lvh w-full object-cover -z-10" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />

      <div className="h-full flex flex-col justify-between">
        <Navigation />

        <section className="mt-5 select-none">
          <div className="text-[24px] font-customDress text-[#868fed] text-center uppercase">
            Selection Stats
          </div>
          <div className="text-[13px] font-customNoto text-gray-400 text-center px-8 max-w-[800px] mx-auto">
            Showcasing the top skills for each class in higher-tier clears
            involves focusing on those abilities that are most frequently used
            by elite players. These skills are chosen for their effectiveness,
            synergy with other abilities, and their contribution to fast or
            successful clears.
          </div>
        </section>

        <>
          <div className="relative flex w-full justify-center max-w-[250px] mx-auto my-5">
            <Input
              type="email"
              label="Tier Level"
              inputRef={inputRef}
              className="pr-20 text-white"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={tier ? "teal" : "blue-gray"}
              className="!absolute right-1 top-1 rounded"
              onClick={handleSortTier}
            >
              Sort
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-[1600px] px-4 mb-5 select-none">
            {allBuildCount.map((compo, index) => (
              <>
                {allBuildCount[index].length > 0 && (
                  <div>
                    <div>
                      <div className="text-[red] text-[20px] text-center font-customDiablo">
                        {compo[0].class}
                      </div>
                      <div className="text-white text-center font-customNoto text-[12px]">
                        {findTotalOfClass(compo[0].class)} Count
                      </div>
                      <div className="text-white text-center font-customNoto text-[12px]">
                        {compo.length} Variants
                      </div>
                    </div>
                    {compo.map((obj) => (
                      <>
                        <div className="flex justify-center gap-1 my-2 items-center font-customSource text-[16px]">
                          {ReturnSkillIcon(obj.build).map((item) => (
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
                                size="sm"
                                draggable={false}
                                className="hover:scale-[110%] ease-in duration-100 transition-all"
                              />
                            </Tooltip>
                          ))}
                          <div className="text-amber-100 text-[14px]">
                            {(
                              (obj.played / findTotalOfClass(compo[0].class)) *
                              100
                            ).toFixed(2)}
                            %
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
              </>
            ))}
          </div>
        </>
        <Footer />
      </div>
    </section>
  );
}
