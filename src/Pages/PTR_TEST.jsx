import { Footer } from "./Home";
import Navigation from "../Button/NavHead";

import AccordWrap from "../Components/CustomWrap/AccordCustom";
import PTRAccordionMain from "../Components/PTR_Accordion";
import { Card, Avatar, Typography, Tooltip } from "@material-tailwind/react";
import { PTR_DATA } from "../DataLogic/TestingData";

import { PTRclassColor } from "../Components/PTR_Accordion";
import { ReturnSkillIcon } from "../DataLogic/ProcessFunction";

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
        <div className="max-w-[1200px] w-full mx-auto px-1">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-evenly py-2 px-0 gap-1 select-none">
            {PTR_DATA.map((obj) => (
              <Card
                className="p-2 w-full min-h-[200px] sm:min-h-[150px] relative bg-transparent shadow-[0_0_15px_black] border-[2px] border-[black]"
                style={{ backgroundColor: `${PTRclassColor(obj.Class)}66` }}
              >
                <img
                  src={`/t${obj.Class}.gif`}
                  alt="cover-bg"
                  className="absolute h-full w-full top-0 left-0 object-cover object-center -z-10 rounded-xl opacity-50"
                />
                {/* Divider */}
                <div className="h-full flex flex-col items-center justify-center">
                  <Typography className="text-[#d29d9d] font-customDiablo text-[12px]">
                    {obj.Class}
                  </Typography>
                  <Avatar src={`/ClassesIcon/${obj.Class}.png`} />
                  <Typography className="text-white font-customDress">
                    {obj.Player}
                  </Typography>
                  <Typography className="text-[white] font-customNoto font-bold text-[14px]">
                    Tier {obj.Tier}
                  </Typography>
                  <div className="flex flex-wrap gap-[4px] sm:gap-[2px] justify-center my-1">
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
                          className="shadow-[0_0_10px_teal] rounded-sm"
                          loading="lazy"
                        />
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-[4px] sm:gap-[2px] justify-center">
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
                          className="shadow-[0_0_10px_teal] rounded-sm"
                          loading="lazy"
                        />
                      </Tooltip>
                    ))}
                  </div>
                </div>
                {/* Divider */}
              </Card>
            ))}
          </div>
          <div className="mt-5">
            <AccordWrap>
              <Card className="bg-transparent" shadow={false}>
                {PTR_DATA.map((obj, index) => (
                  <div
                    className={`${
                      index % 2 === 0 ? `bg-[#0d1c2ecc]` : `bg-[#151515cc]`
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
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
