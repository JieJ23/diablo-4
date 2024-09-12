import { Card, CardFooter, IconButton } from "@material-tailwind/react";

import { useData } from "../Hook/DataFetch";
import DataLoadingLoader from "../Hook/Loader";
import { useState } from "react";
import AccordWrap from "./CustomWrap/AccordCustom";
import AccordionMain from "./Accordion";
import {
  BreakList,
  addRankProperty,
  removeDup,
  convertToSec,
  addClassRank,
} from "../DataLogic/ProcessFunction";
import ClassesBtn from "../Button/ClassesBtn";

import SkillsSelection from "./MainSelect";
import PlayerSelection from "./SecondarySelect";

import TopOfEachClass from "./TopEachClass";

export default function PitLadder() {
  const { posts, loader } = useData();

  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const checkUser = posts.filter((obj) => obj.Compiled === "player");
  const checkSelf = posts.filter((obj) => obj.Compiled === "self");
  const checkUP = [...new Set(posts.map((obj) => obj.Player))];
  // console.log(checkUser.length);
  // console.log(checkSelf.length);

  // Functions
  const handleDataChange = (num) => ({
    variant: category === num ? "text" : "filled",
    onClick: () => {
      setCategory(num);
      setPageInfo(0);
      setActive(1);
    },
  });
  function handleChangePage(arr) {
    setPageInfo(arr);
  }
  const getList = (index) => ({
    variant: active === index ? "gradient" : "text",
    color: "white",
    onClick: () => {
      setActive(index);
      handleChangePage(index - 1);
    },
  });
  //

  const baseData = posts.slice().sort((a, b) => (a.Tier > b.Tier ? -1 : 1));

  const rawData = baseData
    .slice()
    .sort((a, b) =>
      convertToSec(a["Time Used"]) > convertToSec(b["Time Used"]) ? 1 : -1
    )
    .sort((a, b) => (a.Tier > b.Tier ? -1 : 1));
  const uniqueData = removeDup(rawData.slice()).filter(
    (obj) => convertToSec(obj["Time Used"]) < 900
  );
  const latest10 = posts.slice(-25).reverse();
  const hardcoreEntries = rawData.filter((obj) => obj.Mode === "HC");
  const speed101 = rawData.filter((obj) => obj.Tier === 101);
  const allClasses = [...new Set(rawData.map((obj) => obj.Class))];

  //
  const uniqueInitialSort = rawData
    .slice()
    .filter((obj) => convertToSec(obj["Time Used"]) < 900);
  const uniqueSecondSort = removeDup(uniqueInitialSort);
  addRankProperty(uniqueSecondSort);
  //

  // Add Class Ranks
  for (let i = 0; i < allClasses.length; i++) {
    let tempArr = uniqueData.filter((obj) => obj.Class === allClasses[i]);
    addClassRank(tempArr, "classRank", 200);
  }
  //

  const allData = [latest10, hardcoreEntries, uniqueData, speed101];

  for (let i = 0; i < allClasses.length; i++) {
    let tempArr = rawData.filter((obj) => obj.Class === allClasses[i]);
    let finalized = tempArr;
    allData.push(finalized);
  }

  allData.push(
    baseData.filter((obj) => obj["Skills Used"].includes(`${selectedSkill}`))
  );

  allData.push(
    baseData.filter((obj) => obj.Player.includes(`${selectedPlayer}`))
  );

  let dataDisplay = allData[category];

  const { eachPages, totalPages } = BreakList(dataDisplay, 25);

  let sortDisplay = eachPages[pageInfo];

  const handleSkillChange = (newValue) => {
    setSelectedSkill(newValue);
    setCategory(allData.length - 2);
    setPageInfo(0);
    setActive(1);
  };

  const handlePlayerChange = (newValue) => {
    setSelectedPlayer(newValue);
    setCategory(allData.length - 1);
    setPageInfo(0);
    setActive(1);
  };

  return (
    <>
      {loader ? (
        <DataLoadingLoader />
      ) : (
        <div className="mt-5">
          <AccordWrap>
            <Card
              className="w-full mx-auto max-w-[1200px] px-1 bg-transparent"
              shadow={false}
            >
              <TopOfEachClass objData={baseData} />
              <ClassesBtn
                onButtonClick={handleDataChange}
                classes={allClasses}
              />

              <div className="flex flex-col md:flex-row justify-center gap-2 my-5 max-w-[800px] mx-auto">
                <SkillsSelection
                  allSkills={baseData}
                  onSkillChange={handleSkillChange}
                  watch={category}
                  fulldata={allData}
                />
                <PlayerSelection
                  allPlayers={baseData}
                  onPlayerChange={handlePlayerChange}
                  watch={category}
                  fulldata={allData}
                />
              </div>

              {sortDisplay.map((obj, index) => (
                <div
                  className={`${
                    index % 2 === 0 ? `bg-[#0d1c2ecc]` : `bg-[#151515cc]`
                  } mb-1 rounded-lg backdrop-blur-sm relative border-[2px] border-[#131111]`}
                >
                  <AccordionMain
                    obj={obj}
                    watch={category}
                    watch2={active}
                    watch3={setSelectedSkill}
                    watch4={setSelectedPlayer}
                  />
                </div>
              ))}
              <CardFooter className="p-3">
                <div className="flex gap-2">
                  {totalPages.map((page, index) => (
                    <IconButton {...getList(page)} key={index}>
                      {page}
                    </IconButton>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </AccordWrap>
        </div>
      )}
    </>
  );
}
