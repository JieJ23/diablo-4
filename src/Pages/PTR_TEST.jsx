import { Footer } from "./Home";
import Navigation from "../Button/NavHead";

import {
  Card,
  Avatar,
  Button,
  Tooltip,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";
import { PTR_DATA } from "../DataLogic/TestingData";

import { classColor } from "../Components/Accordion";
import {
  ReturnSkillIcon,
  convertToSec,
  removeDup,
  BreakList,
  addClassRank,
  addRankProperty,
} from "../DataLogic/ProcessFunction";

import { haveProfile } from "../DataLogic/Profile";
import S6CategoryBtns from "../Components/Season6/Categories";
import SkillsSelection from "../Components/MainSelect";
import PlayerSelection from "../Components/SecondarySelect";
import RunesSelection from "../Components/Season6/ThirdSelect";
// import AccordionMain from "../Components/Accordion";
import AccordTemplate from "../Components/Season6/AccordTemplate";
import AccordWrap from "../Components/CustomWrap/AccordCustom";

function uppercaseFirstLetter(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

import { useState } from "react";
import { PTR } from "../Components/PTR";

export default function PTR_TEST() {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedRune, setSelectedRune] = useState(null);

  const [compact, setCompact] = useState(true);

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

  const handleRuneChange = (newValue) => {
    setSelectedRune(newValue);
    setCategory(s6AllData.length - 3);
    setPageInfo(0);
    setActive(1);
  };
  const handleSkillChange = (newValue) => {
    setSelectedSkill(newValue);
    setCategory(s6AllData.length - 2);
    setPageInfo(0);
    setActive(1);
  };

  const handlePlayerChange = (newValue) => {
    setSelectedPlayer(newValue);
    setCategory(s6AllData.length - 1);
    setPageInfo(0);
    setActive(1);
  };

  const handleLayout = () => {
    setCompact(!compact);
  };

  // All Classes
  const s6AllClasses = [...new Set(PTR_DATA.map((obj) => obj.Class))];
  // Sort Data
  const sortBaseData = PTR_DATA.slice()
    .sort((a, b) =>
      convertToSec(a["Time Used"]) > convertToSec(b["Time Used"]) ? 1 : -1
    )
    .sort((a, b) => (a.Tier > b.Tier ? -1 : 1));

  // Default Sort
  const latest10 = PTR_DATA.slice(-20).reverse();
  const hardcoreRuns = PTR_DATA.filter((obj) => obj.Mode === `HC`);

  const globalData = removeDup(sortBaseData.slice()).filter(
    (obj) => convertToSec(obj["Time Used"]) < 900
  );

  // Add Player/Class Rank
  const uniqueInitialSort = sortBaseData
    .slice()
    .filter((obj) => convertToSec(obj["Time Used"]) < 900);
  const uniqueSecondSort = removeDup(uniqueInitialSort);
  addRankProperty(uniqueSecondSort);

  for (let i = 0; i < s6AllClasses.length; i++) {
    let tempArr = globalData.filter((obj) => obj.Class === s6AllClasses[i]);
    addClassRank(tempArr, "classRank", 200);
  }

  // Displayed Data
  const s6AllData = [latest10, hardcoreRuns, globalData];

  // Add Classes category
  for (let i = 0; i < s6AllClasses.length; i++) {
    let tempArr = sortBaseData.filter((obj) => obj.Class === s6AllClasses[i]);
    let finalized = tempArr;
    s6AllData.push(finalized);
  }

  s6AllData.push(
    sortBaseData.filter((obj) => obj["Runewords"].includes(`${selectedRune}`))
  );

  s6AllData.push(
    sortBaseData.filter((obj) =>
      obj["Skills Used"].includes(`${selectedSkill}`)
    )
  );

  s6AllData.push(
    sortBaseData.filter((obj) => obj.Player.includes(`${selectedPlayer}`))
  );

  let dataDisplay = s6AllData[category];

  const { eachPages, totalPages } = BreakList(dataDisplay, 20);

  let sortDisplay = eachPages[pageInfo];

  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131111] h-lvh w-full object-cover -z-20" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />

      <div className="h-full flex flex-col justify-between">
        <Navigation />
        <div className="max-w-[1400px] w-full mx-auto px-2 my-10">
          <section className="my-5 select-none">
            <div className="text-white font-customDress uppercase text-[24px] text-center">
              Season 6 PTR
            </div>
            <div className="text-gray-400 font-customNoto text-[13px] max-w-[900px] mx-auto text-center">
              Brainstorming layout concepts and testing ideas for Season 6,
              Vessel of Hatred. The following entries are compiled from the
              current PTR session. Please note that everything below is subject
              to change or updates as needed and does not reflect any final
              product, if applicable. Runewords and time are both loosely
              accounted for in this test.
            </div>
          </section>
          <S6CategoryBtns
            classes={s6AllClasses}
            onButtonClick={handleDataChange}
          />
          <div className="flex flex-col lg:flex-row justify-center gap-2 mt-5 mb-2 mx-auto max-w-[400px] lg:w-full">
            <RunesSelection
              allRunes={sortBaseData}
              onRuneChange={handleRuneChange}
              watch={category}
              fulldata={s6AllData}
            />
            <SkillsSelection
              allSkills={sortBaseData}
              onSkillChange={handleSkillChange}
              watch={category}
              fulldata={s6AllData}
            />
            <PlayerSelection
              allPlayers={sortBaseData}
              onPlayerChange={handlePlayerChange}
              watch={category}
              fulldata={s6AllData}
            />
          </div>
          <div className="w-full max-w-[1200px] mx-auto px-4 flex justify-end my-3">
            <Button
              variant="gradient"
              color="teal"
              onClick={handleLayout}
              className="flex items-center gap-2"
              size="sm"
            >
              Layout View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </Button>
          </div>

          {compact ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 py-2 px-0 gap-1 xl:gap-2 select-none justify-center mb-5 mt-2">
              {sortDisplay.map((obj, index) => (
                <Card
                  className="p-2 relative bg-transparent border-[2px] border-[#28282b] shadow-[0_0_10px_black]"
                  style={{ backgroundColor: `#00000066` }}
                >
                  <div className="absolute bg-[#17171799] h-full w-full top-0 left-0 object-cover rounded-xl" />
                  <div
                    className="absolute h-full w-full top-0 left-0 -z-10 rounded-lg opacity-50 bg-top bg-cover"
                    style={{ backgroundImage: `url("/t${obj.Class}.png")` }}
                  />
                  <div className="absolute bottom-1 left-2 text-gray-400 font-customNoto font-normal text-[10px] z-10 text-center">
                    PTR
                  </div>
                  <div className="h-full flex flex-row items-center justify-center z-20">
                    <div className="flex flex-col h-full justify-center gap-2 items-center flex-1">
                      <div className="text-gray-400 font-customDiablo text-[13px]">
                        {obj.Class}
                      </div>
                      {
                        <Avatar
                          src={
                            haveProfile.includes(obj.Player)
                              ? `/pfp/${obj.Player}.png`
                              : `/ClassesIcon/${obj.Class}.png`
                          }
                          variant="circular"
                          draggable={false}
                          className={
                            haveProfile.includes(obj.Player) &&
                            `shadow-[0_0_30px_black]`
                          }
                        />
                      }
                      <div className="text-white font-customDress uppercase text-[13px] sm:text-[15px]">
                        {obj.Player}
                      </div>
                      <div
                        className={`font-customNoto text-[11px] sm:text-[12px] ${
                          obj.Tier > 99 ? `text-[#47e87c]` : `text-white`
                        }`}
                      >
                        Tier {obj.Tier}
                      </div>
                    </div>
                    <div className="flex flex-col h-full justify-evenly items-center flex-1">
                      {obj.Runewords !== "" ? (
                        <div className="flex gap-[4px] sm:gap-[2px] justify-center my-1">
                          {ReturnSkillIcon(obj.Runewords).map((item) => (
                            <Tooltip
                              content={
                                <div className="px-2">
                                  <div className="font-customDiablo text-[14px] text-[#b373e4]">
                                    Runewords: {item}
                                  </div>
                                </div>
                              }
                              className="bg-black select-none border-[1px]"
                            >
                              <Avatar
                                src={`/Runewords/${item}.png`}
                                variant="rounded"
                                size="xs"
                                draggable={false}
                                className="shadow-[0_0_5px_black] rounded-sm hover:scale-[110%] ease-in duration-100 transition-all"
                              />
                            </Tooltip>
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-[4px] sm:gap-[2px] justify-center my-1">
                          <Tooltip
                            content={
                              <div className="px-2">
                                <div className="font-customDiablo text-[14px] text-[#b373e4]">
                                  No Runewords
                                </div>
                              </div>
                            }
                            className="bg-black select-none border-[1px]"
                          >
                            <Avatar
                              src={`/runesT.png`}
                              variant="rounded"
                              size="xs"
                              draggable={false}
                              className="rounded-sm"
                            />
                          </Tooltip>
                          <Tooltip
                            content={
                              <div className="px-2">
                                <div className="font-customDiablo text-[14px] text-[#b373e4]">
                                  No Runewords
                                </div>
                              </div>
                            }
                            className="bg-black select-none border-[1px]"
                          >
                            <Avatar
                              src={`/runesB.png`}
                              variant="rounded"
                              size="xs"
                              draggable={false}
                              className="rounded-sm"
                            />
                          </Tooltip>
                        </div>
                      )}
                      <div className="grid grid-cols-3 gap-[2px] justify-center mb-1">
                        {ReturnSkillIcon(obj["Skills Used"]).map((item) => (
                          <Tooltip
                            content={
                              <div className="px-2">
                                <div
                                  className="font-customDiablo text-[14px]"
                                  color="white"
                                >
                                  {item}
                                </div>
                              </div>
                            }
                            className="bg-black select-none border-[1px]"
                          >
                            <Avatar
                              src={`/Skills/${item}.png`}
                              variant="rounded"
                              size="xs"
                              draggable={false}
                              className="shadow-[0_0_5px_black] rounded-sm hover:scale-[110%] ease-in duration-100 transition-all"
                            />
                          </Tooltip>
                        ))}
                      </div>
                      <div className="text-gray-400 font-customNoto font-normal text-[11px] text-center">
                        Time {obj["Time Used"]}
                      </div>
                      <div className="text-[#47e87c] font-customNoto font-normal text-[11px] text-center">
                        {uppercaseFirstLetter(obj["Build Name"])}
                      </div>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="border-t-[1px] border-[transparent] my-1 w-full mx-auto" />
                  <div className="w-full flex flex-wrap gap-1 items-center">
                    <div
                      className="text-white font-customNoto font-normal text-[11px] z-10 text-center p-1 rounded-md shadow-[0_0_10px_black]"
                      style={{ backgroundColor: classColor(obj.Class) }}
                    >
                      #{obj.classRank} {obj.Class}
                    </div>
                    <div className="text-white font-customNoto font-normal text-[11px] z-10 text-center bg-[#393c88cc] p-1 rounded-md shadow-[0_0_10px_black]">
                      #{obj.Rank} Overall
                    </div>
                    {obj.Mode === `HC` && (
                      <div className="text-black font-customNoto font-normal text-[11px] z-10 text-center bg-[#f44545cc] p-1 rounded-md shadow-[0_0_10px_black]">
                        Hardcore
                      </div>
                    )}
                  </div>
                  <div className="w-full flex justify-between gap-1 items-center my-0.5">
                    <div className="text-gray-400 font-customNoto font-normal text-[10px] z-10 text-center">
                      {obj["Date"].slice(0, 10)}
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      {obj["Run Comment"] && (
                        <Tooltip
                          content={
                            <div className="flex justify-center p-1 font-customNoto text-[12px]">
                              {obj["Run Comment"]}
                            </div>
                          }
                          className="bg-[#bdb7b7] text-black select-none px-4 max-w-[500px] shadow-[inset_0_0_10px_black]"
                        >
                          <Avatar
                            src="/comment.png"
                            variant="rounded"
                            className="w-[21px] h-[21px]"
                            draggable={false}
                          />
                        </Tooltip>
                      )}
                      {obj["Run Video"] && (
                        <a href={obj["Run Video"]} target="_blank">
                          <Avatar
                            src={
                              obj["Run Video"].includes(`x.com`)
                                ? `/Skills/X.png`
                                : obj["Run Video"].includes(`bilibili`)
                                ? `/bilibili.png`
                                : `/youtube.png`
                            }
                            variant="rounded"
                            size="xs"
                            className="hover:scale-110 ease-in duration-200 transition-all p-0.5"
                            draggable={false}
                          />
                        </a>
                      )}
                      {obj["Build Planner"] !== "" && (
                        <a href={obj["Build Planner"]} target="_blank">
                          <Avatar
                            src={`build.png`}
                            variant="rounded"
                            size="xs"
                            className="hover:scale-110 ease-in duration-200 transition-all p-0.5"
                            draggable={false}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <AccordWrap>
              <Card
                className="w-full mx-auto max-w-[1200px] bg-transparent"
                shadow={false}
              >
                <div className="w-full max-w-[1400px] flex flex-col justify-center items-center mx-auto mb-5 mt-2">
                  {sortDisplay.map((obj, index) => (
                    <div
                      className={`${
                        index % 2 === 0 ? `bg-[#0e2a31cc]` : `bg-[#141415cc]`
                      } mb-1 rounded-lg backdrop-blur-sm relative border-[2px] border-[#131111] w-full`}
                    >
                      <AccordTemplate
                        obj={obj}
                        watch={category}
                        watch2={active}
                        watch3={setSelectedSkill}
                        watch4={setSelectedPlayer}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </AccordWrap>
          )}
          <CardFooter className="p-3">
            <div className="flex gap-2">
              {totalPages.map((page, index) => (
                <IconButton {...getList(page)} key={index}>
                  {page}
                </IconButton>
              ))}
            </div>
          </CardFooter>
        </div>

        <Footer />
      </div>
    </section>
  );
}
