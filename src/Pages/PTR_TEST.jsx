import { Footer } from "./Home";
import Navigation from "../Button/NavHead";

import AccordWrap from "../Components/CustomWrap/AccordCustom";
import PTRAccordionMain from "../Components/PTR_Accordion";
import { Card, Avatar, Typography, Tooltip } from "@material-tailwind/react";
import { PTR_DATA } from "../DataLogic/TestingData";

import { PTRclassColor } from "../Components/PTR_Accordion";
import { ReturnSkillIcon } from "../DataLogic/ProcessFunction";

import { haveProfile } from "../DataLogic/Profile";

export default function PTR_TEST() {
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
        <div className="max-w-[1200px] xl:max-w-[1400px] w-full mx-auto px-1">
          <div className="text-white font-customDress uppercase text-[24px] text-center">
            Public Testing Realm
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-2 px-0 gap-1 select-none justify-center">
            {PTR_DATA.map((obj) => (
              <Card
                className="p-3 relative bg-transparent shadow-[0_0_15px_black] border-[2px] border-[black]"
                style={{ backgroundColor: `${PTRclassColor(obj.Class)}66` }}
              >
                <div className="h-full flex flex-row items-center justify-center">
                  <div className="flex flex-col h-full justify-evenly gap-1 items-center flex-1">
                    <Typography className="text-[#d29d9d] font-customDiablo text-[12px]">
                      {obj.Class}
                    </Typography>
                    {
                      <Avatar
                        src={
                          haveProfile.includes(obj.Player)
                            ? `/pfp/${obj.Player}.png`
                            : `/ClassesIcon/${obj.Class}.png`
                        }
                        variant="rounded"
                        className={
                          haveProfile.includes(obj.Player) &&
                          `shadow-[0_0_20px_black]`
                        }
                      />
                    }
                    <Typography className="text-white font-customDress">
                      {obj.Player}
                    </Typography>
                    <Typography className="text-[white] font-customNoto font-bold text-[12px]">
                      Tier {obj.Tier}
                    </Typography>
                  </div>
                  <div className="flex flex-col items-start sm:items-center flex-1">
                    <div className="flex gap-[4px] sm:gap-[2px] justify-center self-start sm:self-center my-1">
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
                            loading="lazy"
                          />
                        </Tooltip>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-[2px] justify-center mb-1 self-start sm:self-center">
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
                            loading="lazy"
                          />
                        </Tooltip>
                      ))}
                    </div>
                    <Typography className="text-blue-gray-300 font-customNoto font-bold text-[12px]">
                      {obj["Build Name"]}
                    </Typography>
                    <Typography className="text-blue-gray-300 font-customNoto font-bold text-[11px]">
                      Time {obj["Time Used"]}
                    </Typography>
                    <div className="w-full flex justify-center">
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
                            loading="lazy"
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
                            loading="lazy"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* Divider */}
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
