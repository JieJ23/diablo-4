import { useData } from "../Hook/DataFetch";
import DataLoadingLoader from "../Hook/Loader";

import { ReturnSkillIcon } from "../DataLogic/ProcessFunction";
import { Typography, Tooltip, Avatar } from "@material-tailwind/react";
import { Tabs } from "../Components/Breadcrumbs";

export default function Builds() {
  const { posts, loader } = useData();

  const allBuildCount = [];

  const allAvailableClass = [...new Set(posts.map((obj) => obj.Class))].sort();

  //
  function findTotalOfClass(t) {
    const temp = posts.filter((obj) => obj.Class === t);
    return temp.length;
  }

  console.log(findTotalOfClass("Druid"));

  function addClassSetUp(c) {
    const tempBuildCount = [];
    const tempClass = posts.filter((obj) => obj.Class === c);
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

  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131313] h-lvh w-full object-cover -z-10" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />

      <Tabs title={`Build Stats`} />

      {loader ? (
        <DataLoadingLoader />
      ) : (
        <div className="flex flex-wrap justify-evenly gap-10 mx-auto max-w-[1200px] px-4 my-10">
          {allBuildCount.map((compo) => (
            <div>
              <div>
                <div className="text-[red] text-[20px] text-center font-customDiablo">
                  {compo[0].class}
                </div>
                <div className="text-white text-center font-customDiablo">
                  {compo.length} Variant
                </div>
                <div className="text-white text-center font-customDiablo">
                  {findTotalOfClass(compo[0].class)} Run
                </div>
              </div>
              {compo.map((obj) => (
                <>
                  <div className="flex justify-center gap-1 my-2 items-center font-customNoto text-[16px]">
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
                          loading="lazy"
                        />
                      </Tooltip>
                    ))}
                    <div className="text-orange-100">
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
          ))}
        </div>
      )}
    </section>
  );
}
