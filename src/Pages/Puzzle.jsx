import { useData } from "../Hook/DataFetch";
import DataLoadingLoader from "../Hook/Loader";
import { Tabs } from "../Components/Breadcrumbs";
import { classColor } from "../Components/Accordion";
import { Avatar } from "@material-tailwind/react";
import { pfpStore } from "../DataLogic/ProcessFunction";

function CreateBox({ c, a, t, p }) {
  return (
    <div
      className={`h-12 w-12 rounded-md shadow-[0_0_2px_white] flex justify-center items-center`}
      style={{ backgroundColor: c }}
    >
      {t >= 150 ? (
        <Avatar
          src={
            pfpStore.includes(p)
              ? `/Profile/${p}.png`
              : `/Profile/placeholder.png`
          }
          size="sm"
          className="select-none shadow-[0_0_10px_black]"
          draggable={false}
        />
      ) : (
        <Avatar
          src={`/ClassesIcon/${a}.png`}
          size="sm"
          className="select-none"
          draggable={false}
        />
      )}
    </div>
  );
}

export default function Puzzle() {
  const { posts, loader } = useData();

  const data = posts.slice().sort((a, b) => (a.Tier > b.Tier ? -1 : 1));

  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131313] h-lvh w-full object-cover -z-10" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />

      <Tabs title={`Build Block`} />

      {loader ? (
        <DataLoadingLoader />
      ) : (
        <div className="my-10">
          <div className="font-customDress text-[20px] text-center text-white px-4">
            Building Blocks (P/C Performance)
          </div>
          <div className="font-customNoto text-[12px] text-center text-gray-400 px-6">
            Below are all the entries, sorted from highest to lowest tier
            completion, providing a visual representation of the current
            leaderboard.
          </div>
          <section className="flex flex-wrap gap-2 my-5 max-w-[1000px] px-4 justify-center md:justify-start mx-auto backdrop-blur-sm">
            {data.map((item) => (
              <CreateBox
                p={item.Player}
                c={classColor(item.Class)}
                a={item.Class}
                t={item.Tier}
              />
            ))}
          </section>
        </div>
      )}
    </section>
  );
}
