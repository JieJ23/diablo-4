import { s5Data } from "../DataLogic/S5Data";
import { classColor } from "../Components/Accordion";
import { Avatar } from "@material-tailwind/react";
import ClassChart from "../Components/ClassChart";
import ClassChart2 from "../Components/ClassChart2";
import Navigation from "../Button/NavHead";
import { Footer } from "./Home";

function CreateBox({ c, a, t, p }) {
  return (
    <div
      className={`h-10 w-10 rounded-md shadow-[0_0_2px_white] flex justify-center items-center ${
        t >= 150 && `border-[1px] border-[cyan]`
      }`}
      style={{ backgroundColor: c }}
    >
      <Avatar
        src={`/ClassesIcon/${a}.png`}
        size="xs"
        className={`select-none`}
        draggable={false}
      />
    </div>
  );
}

export default function Puzzle() {
  const data = s5Data.slice().sort((a, b) => (a.Tier > b.Tier ? -1 : 1));

  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131313] h-lvh w-full object-cover -z-10" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />
      <Navigation />

      <>
        <div className="max-w-[1200px] mx-auto px-2 my-5">
          <ClassChart2 />
        </div>
        <div className="max-w-[1200px] mx-auto px-2 my-5">
          <ClassChart />
        </div>
        <div className="my-10 select-none">
          <div className="font-customDress text-[20px] text-center text-[#868fed] px-4">
            Building Blocks (P/C Performance)
          </div>
          <div className="font-customNoto text-[13px] text-center text-gray-400 px-6">
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
      </>
      <Footer />
    </section>
  );
}
