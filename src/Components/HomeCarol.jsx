import {
  List,
  ListItem,
  Card,
  Typography,
  Avatar,
  Carousel,
  IconButton,
} from "@material-tailwind/react";

import { useData } from "../Hook/DataFetch";
import { classColor } from "./Accordion";
import { haveProfile } from "../DataLogic/Profile";
import { addClassRank, addRankProperty } from "../DataLogic/ProcessFunction";
import { convertToSec } from "../DataLogic/ProcessFunction";
import { removeDup } from "../DataLogic/ProcessFunction";
import { DataLoadingLoader2 } from "../Hook/Loader";

//
function CreateBoard({ arr, title }) {
  return (
    <Card
      className="relative h-full pb-2 bg-[#181a30cc] pointer-events-none"
      shadow={false}
    >
      <List className=" px-5 h-full">
        <ListItem className="text-center">
          <div className="flex-1 text-center">
            <Typography className="font-customDiablo font-semibold uppercase text-[18px] text-blue-gray-200">
              Current Top 10 {arr[0].Tier === 101 ? "Speed 101" : title}
            </Typography>
          </div>
        </ListItem>
        {arr.map((run, index) => (
          <ListItem className="text-center" key={index}>
            <div className="flex-1 flex items-center gap-1 text-center text-white font-customNoto text-[14px]">
              {haveProfile.includes(run.Player) && (
                <Avatar
                  src={`/pfp/${run.Player}.png`}
                  size="xs"
                  variant="rounded"
                  className="shadow-[0_0_10px_black]"
                />
              )}
              {run.Player}
            </div>
            <div className="flex-1 text-center text-white font-customNoto text-[14px]">
              <Avatar
                src={`/ClassesIcon/${run.Class}.png`}
                size="sm"
                variant="rounded"
                style={{ backgroundColor: classColor(run.Class) }}
                className="shadow-[0_0_20px_black]"
              />
            </div>
            {run.Tier === 101 ? (
              <div className="flex-1 text-center text-white font-customNoto text-[14px]">
                <div className="text-[10px] text-[orange] font-customDiablo">
                  Time
                </div>
                {run["Time Used"]}
              </div>
            ) : (
              <div className="flex-1 text-center text-white font-customNoto text-[14px]">
                <div className="text-[10px] text-[red] font-customDiablo">
                  Tier
                </div>
                {run.Tier}
              </div>
            )}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
//

export default function Top10() {
  const { posts, loader } = useData();

  // Add Ranks To Entries

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
  const allClasses = [...new Set(rawData.map((obj) => obj.Class))];

  const uniqueInitialSort = rawData
    .slice()
    .filter((obj) => convertToSec(obj["Time Used"]) < 900);
  const uniqueSecondSort = removeDup(uniqueInitialSort);
  addRankProperty(uniqueSecondSort);

  for (let i = 0; i < allClasses.length; i++) {
    let tempArr = uniqueData.filter((obj) => obj.Class === allClasses[i]);
    addClassRank(tempArr, "classRank", 25);
  }
  //

  // Each Classes
  const top10EachClasses = [];

  for (let i = 0; i < allClasses.length; i++) {
    let tempClassSet = uniqueData.filter((obj) => obj.Class === allClasses[i]);
    let tempTop10 = tempClassSet.filter((obj) => obj.classRank <= 10);
    top10EachClasses.push(tempTop10);
  }

  //
  const top10Overall = uniqueSecondSort.slice(0, 10);
  const top10Hardcore = uniqueSecondSort
    .filter((obj) => obj.Mode === `HC`)
    .slice(0, 10);

  //
  const speed101runs = posts
    .slice()
    .filter((obj) => obj.Tier === 101)
    .sort((a, b) =>
      convertToSec(a["Time Used"]) > convertToSec(b["Time Used"]) ? 1 : -1
    );

  const finalizedspeed101 = removeDup(speed101runs).slice(0, 10);

  //

  const top10Category = [top10Overall, top10Hardcore, finalizedspeed101];

  return (
    <section className="my-5 w-full bg-transparent max-w-[1200px] mx-auto relative flex gap-2 flex-col md:flex-row px-2">
      {loader ? (
        <DataLoadingLoader2 />
      ) : (
        <>
          <Carousel
            loop={true}
            autoplay={true}
            autoplayDelay={5000}
            className="flex-1 w-full mx-auto"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-3 bg-[white]" : "w-2 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="blue"
                size="md"
                onClick={handlePrev}
                className="!absolute top-1/5 left-1 -translate-y-1/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="blue"
                size="md"
                onClick={handleNext}
                className="!absolute top-1/5 right-1 -translate-y-1/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {top10Category.map((item, index) => (
              <CreateBoard key={index} arr={item} title={item[0].Mode} />
            ))}
          </Carousel>
          <Carousel
            loop={true}
            autoplay={true}
            autoplayDelay={5000}
            className="flex-1 w-full mx-auto"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-xl transition-all content-[''] ${
                      activeIndex === i ? "w-3 bg-white" : "w-2 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="red"
                size="md"
                onClick={handlePrev}
                className="!absolute top-1/5 left-1 -translate-y-1/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="red"
                size="md"
                onClick={handleNext}
                className="!absolute top-1/5 right-1 -translate-y-1/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {top10EachClasses.map((item, index) => (
              <CreateBoard key={index} arr={item} title={item[0].Class} />
            ))}
          </Carousel>
        </>
      )}
    </section>
  );
}
