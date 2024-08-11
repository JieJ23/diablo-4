import { Card, CardFooter, IconButton } from "@material-tailwind/react";

import { useData } from "../Hook/DataFetch";
import DataLoadingLoader from "../Hook/Loader";
import { useState } from "react";
import AccordWrap from "./CustomWrap/AccordCustom";
import AccordionMain from "./Accordion";
import { BreakList, addRankProperty } from "../DataLogic/ProcessFunction";
import ClassesBtn from "../Button/ClassesBtn";
import FAQ from "./FAQ";

export default function PitLadder() {
  const { posts, loader } = useData();

  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);

  // Functions
  const handleDataChange = (num) => ({
    variant: category === num ? "filled" : "text",
    onClick: () => {
      setCategory(num);
      setPageInfo(0);
      setActive(1);
      addRankProperty(allData[setRank(num)]);
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

  posts.sort((a, b) => (a.Tier > b.Tier ? -1 : 1));
  addRankProperty(posts);

  const rawData = posts
    .slice()
    .sort((a, b) => (a.Date > b.Date ? -1 : 1))
    .sort((a, b) => (a.Tier > b.Tier ? -1 : 1));
  const pitData = posts.slice();
  const allClasses = [...new Set(rawData.map((obj) => obj.Class))];

  const allData = [pitData];

  for (let i = 0; i < allClasses.length; i++) {
    let tempArr = rawData.filter((obj) => obj.Class === allClasses[i]);
    let finalized = tempArr;
    allData.push(finalized);
  }

  let dataDisplay = allData[category];

  const { eachPages, totalPages } = BreakList(dataDisplay, 50);

  let sortDisplay = eachPages[pageInfo];

  return (
    <>
      {loader ? (
        <DataLoadingLoader />
      ) : (
        <>
          <AccordWrap>
            <Card
              className="w-full mx-auto max-w-[1200px] px-1 bg-transparent"
              shadow={false}
            >
              <div className="text-[32px] text-center my-3 text-[white] font-customDiablo">
                Diablo 4: The Pit
              </div>

              <ClassesBtn
                onButtonClick={handleDataChange}
                classes={allClasses}
              />

              {sortDisplay.map((obj, index) => (
                <div
                  className={`${
                    index % 2 === 0 ? `bg-[#222222cc]` : `bg-[#141414cc]`
                  } mb-1 rounded-lg backdrop-blur-sm relative`}
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
          <FAQ />
        </>
      )}
    </>
  );
}
