import { Card, CardFooter, IconButton, Alert } from "@material-tailwind/react";
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
import { HomeDraw } from "../Pages/HomeDraw";
import { SubmitCard } from "./Submission";
import { s5Data } from "../DataLogic/S5Data";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export default function PitLadder() {
  const [category, setCategory] = useState(2);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const checkUser = s5Data.filter((obj) => obj.Compiled === "player");
  const checkSelf = s5Data.filter((obj) => obj.Compiled === "self");
  const checkUP = [...new Set(s5Data.map((obj) => obj.Player))];
  // console.log(checkUser.length);
  // console.log(checkSelf.length);

  // Functions
  const handleDataChange = (num) => ({
    variant: category === num ? "gradient" : "text",
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

  const baseData = s5Data.slice();

  const rawData = baseData
    .slice()
    .sort((a, b) => convertToSec(a["Time Used"]) - convertToSec(b["Time Used"]))
    .sort((a, b) => +b.Tier - +a.Tier);
  const uniqueData = removeDup(rawData.slice()).filter(
    (obj) => convertToSec(obj["Time Used"]) < 900
  );
  const latest10 = s5Data.slice(-25).reverse();
  const hardcoreEntries = rawData.filter((obj) => obj.Mode === "HC");
  const speed101 = rawData.filter((obj) => +obj.Tier === 101);
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
    rawData.filter((obj) => obj["Skills Used"].includes(`${selectedSkill}`))
  );

  allData.push(
    rawData.filter((obj) => obj.Player.includes(`${selectedPlayer}`))
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
      <div>
        <AccordWrap>
          <Card
            className="w-full mx-auto max-w-[1200px] px-1 bg-transparent"
            shadow={false}
          >
            <div className="mt-2 font-customSource">
              <Alert icon={<Icon />} color="indigo" className="text-[14px]">
                {`Important: A copycat website is now using our former domain (diablo4pit.netlify.app) and is redirecting it to their site. Please be aware that our official website is diablo4pit.pages.dev, and we are not affiliated with any other website using the 'diablo4pit' name. Thank you for your continued support.`}
              </Alert>
            </div>
            <div className="w-full max-w-[1200px] flex justify-center items-center gap-2 mx-auto px-2 my-5">
              <HomeDraw />
              <SubmitCard />
            </div>

            <TopOfEachClass objData={rawData} />
            <ClassesBtn onButtonClick={handleDataChange} classes={allClasses} />

            <div className="flex flex-col md:flex-row justify-center gap-2 my-5 max-w-[800px] mx-auto">
              <SkillsSelection
                allSkills={rawData}
                onSkillChange={handleSkillChange}
                watch={category}
                fulldata={allData}
              />
              <PlayerSelection
                allPlayers={rawData}
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
    </>
  );
}
