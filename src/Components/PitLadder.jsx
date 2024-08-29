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

import TopOfEachClass from "./TopEachClass";

export default function PitLadder() {
  const { posts, loader } = useData();

  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);

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
  const uniqueData = removeDup(rawData.slice());
  const latest10 = posts.slice(-25).reverse();
  const speed101 = rawData.filter((obj) => obj.Tier === 101);
  const allClasses = [...new Set(rawData.map((obj) => obj.Class))];

  addRankProperty(uniqueData);

  // Add Class Ranks
  for (let i = 0; i < allClasses.length; i++) {
    let tempArr = uniqueData.filter((obj) => obj.Class === allClasses[i]);
    addClassRank(tempArr, "classRank", 25);
  }
  //

  const allData = [latest10, rawData, uniqueData, speed101];

  for (let i = 0; i < allClasses.length; i++) {
    let tempArr = rawData.filter((obj) => obj.Class === allClasses[i]);
    let finalized = tempArr;
    allData.push(finalized);
  }

  allData.push(
    baseData.filter((obj) => obj["Skills Used"].includes(`${selectedSkill}`))
  );

  let dataDisplay = allData[category];

  const { eachPages, totalPages } = BreakList(dataDisplay, 25);

  let sortDisplay = eachPages[pageInfo];

  const handleSkillChange = (newValue) => {
    setSelectedSkill(newValue);
    setCategory(allData.length - 1);
  };

  return (
    <>
      {loader ? (
        <DataLoadingLoader />
      ) : (
        <div className="mt-5">
          <div className="absolute top-1 left-1 text-cyan-200 font-customNoto text-[10px] -z-10">
            {checkUser.length} / {checkUP.length}
          </div>
          <div className="absolute bottom-1 left-1 text-yellow-500 font-customNoto text-[10px] -z-10">
            {checkSelf.length}
          </div>
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
              <SkillsSelection
                allSkills={baseData}
                onSkillChange={handleSkillChange}
                watch={category}
                fullcategory={allData}
              />

              {sortDisplay.map((obj, index) => (
                <div
                  className={`${
                    index % 2 === 0 ? `bg-[#0d1c2ecc]` : `bg-[#151515cc]`
                  } mb-1 rounded-lg backdrop-blur-sm relative border-[2px] border-[#131111]`}
                >
                  <AccordionMain obj={obj} watch={category} />
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
