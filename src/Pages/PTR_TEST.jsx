import { Footer } from "./Home";
import Navigation from "../Button/NavHead";
//
// import { useData } from "../Hook/DataFetch";
// import { convertToSec } from "../DataLogic/ProcessFunction";
// import { addRankProperty } from "../DataLogic/ProcessFunction";
// import { removeDup } from "../DataLogic/ProcessFunction";
//
import AccordWrap from "../Components/CustomWrap/AccordCustom";
import PTRAccordionMain from "../Components/PTR_Accordion";
import { Card, Avatar, Typography, Tooltip } from "@material-tailwind/react";
import { PTR_DATA } from "../DataLogic/TestingData";

import { PTRclassColor } from "../Components/PTR_Accordion";
import { ReturnSkillIcon } from "../DataLogic/ProcessFunction";

import { haveProfile } from "../DataLogic/Profile";
import { classColor } from "../Components/Accordion";

function uppercaseFirstLetter(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function PTR_TEST() {
  // Testing
  // const { posts, loader } = useData();

  // const sortByTier = posts.slice().sort((a, b) => (a.Tier > b.Tier ? -1 : 1));
  // const sortByTime = sortByTier
  //   .slice()
  //   .sort((a, b) =>
  //     convertToSec(a["Time Used"]) > convertToSec(b["Time Used"]) ? 1 : -1
  //   )
  //   .sort((a, b) => (a.Tier > b.Tier ? -1 : 1));

  // const uniqueSecondSort = removeDup(sortByTime);
  // addRankProperty(uniqueSecondSort);

  // const rogueOnly = uniqueSecondSort
  //   .filter((obj) => obj.Class === `Rogue`)
  //   .slice(0, 25);
  //

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-2 px-0 gap-1 xl:gap-2 select-none justify-center">
            {PTR_DATA.map((obj, index) => (
              <Card
                className="p-2 relative bg-transparent shadow-[0_0_30px_black] border-[2px] border-[black]"
                style={{ backgroundColor: `${PTRclassColor(obj.Class)}8c` }}
              >
                <div className="absolute bg-[#17171799] h-full w-full top-0 left-0 object-cover rounded-lg" />
                <div
                  className="absolute h-full w-full top-0 left-0 -z-10 rounded-lg opacity-90 bg-top bg-cover"
                  style={{ backgroundImage: `url("/t${obj.Class}.png")` }}
                />
                <div className="h-full flex flex-row items-center justify-center z-20">
                  <div className="flex flex-col h-full justify-center gap-2 items-center flex-1">
                    <Typography className="text-gray-400 font-customDiablo text-[13px]">
                      {obj.Class}
                    </Typography>
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
                    <Typography className="text-white font-customDress uppercase text-[13px] sm:text-[15px]">
                      {obj.Player}
                    </Typography>
                    <Typography className="text-[white] font-customNoto text-[11px] sm:text-[12px]">
                      Tier {obj.Tier}
                    </Typography>
                  </div>
                  <div className="flex flex-col h-full justify-evenly items-center flex-1">
                    <div className="flex gap-[4px] sm:gap-[2px] justify-center my-1">
                      {ReturnSkillIcon(obj["Runewords"]).map((item) => (
                        <Tooltip
                          content={
                            <div className="px-2">
                              <Typography className="font-customDiablo text-[14px] text-[#b373e4]">
                                Runewords: {item}
                              </Typography>
                            </div>
                          }
                          className="bg-black select-none border-[1px]"
                        >
                          <Avatar
                            src={`/Runewords/${item}.png`}
                            variant="rounded"
                            size="xs"
                            draggable={false}
                            className="shadow-[0_0_5px_black] rounded-sm"
                          />
                        </Tooltip>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-[2px] justify-center mb-1">
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
                          className="bg-black select-none border-[1px]"
                        >
                          <Avatar
                            src={`/Skills/${item}.png`}
                            variant="rounded"
                            size="xs"
                            draggable={false}
                            className="shadow-[0_0_5px_black] rounded-sm"
                          />
                        </Tooltip>
                      ))}
                    </div>
                    <Typography className="text-[#47e87c] font-customNoto font-semibold text-[11px] text-center">
                      {uppercaseFirstLetter(obj["Build Name"])}
                    </Typography>
                    <Typography className="text-blue-gray-100 font-customNoto font-bold text-[11px] text-center">
                      Time {obj["Time Used"]}
                    </Typography>
                  </div>
                </div>
                {/* Divider */}
                <div className="border-t-[1px] border-[transparent] my-1 w-full mx-auto" />
                <div className="w-full flex flex-wrap gap-1 items-center">
                  <Typography
                    className="text-white font-customNoto font-semibold text-[11px] z-10 text-center p-1 rounded-md shadow-[0_0_10px_black]"
                    style={{ backgroundColor: classColor(obj.Class) }}
                  >
                    #{index + 1} {obj.Class}
                  </Typography>
                  <Typography className="text-white font-customNoto font-semibold text-[11px] z-10 text-center bg-[#393c88cc] p-1 rounded-md shadow-[0_0_10px_black]">
                    #{obj.Rank} Overall
                  </Typography>
                </div>
                <div className="w-full flex justify-between gap-1 items-center">
                  <Typography className="text-gray-300 font-customNoto font-bold text-[10px] z-10 text-center">
                    {obj.Date.slice(0, 10)}
                  </Typography>
                  <div className="flex justify-center items-center gap-1">
                    {obj["Run Comment"] && (
                      <Tooltip
                        content={
                          <div className="flex justify-center p-1 font-customNoto text-[12px]">
                            {obj["Run Comment"]}
                          </div>
                        }
                        className="bg-[black] select-none"
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
                <div className="flex">
                  <Typography className="text-gray-400 font-customNoto font-semibold text-[10px] z-10">
                    Patch 1.6.0
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
          {/* <div className="mt-5">
            <AccordWrap>
              <Card className="bg-transparent" shadow={false}>
                {PTR_DATA.map((obj, index) => (
                  <div
                    className={`${
                      index % 2 === 0 ? `bg-[#0e141bcc]` : `bg-[#13213dcc]`
                    } mb-1 rounded-lg backdrop-blur-sm relative border-[2px] border-[#131111]`}
                  >
                    <PTRAccordionMain obj={obj} />
                  </div>
                ))}
              </Card>
            </AccordWrap>
          </div>
          <div className="text-white text-[12px] text-center my-5 font-customNoto">
            Animation by Winston Duke @lifelongfiction
          </div> */}
        </div>

        <Footer />
      </div>
    </section>
  );
}
