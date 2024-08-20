import { useData } from "../Hook/DataFetch";
import DataLoadingLoader from "../Hook/Loader";
import { Tabs } from "../Components/Breadcrumbs";
import { classColor } from "../Components/Accordion";
import { Avatar } from "@material-tailwind/react";

function CreateBox({ c, a }) {
  return (
    <div
      className={`h-12 w-12 rounded-md shadow-[0_0_2px_white] flex justify-center items-center`}
      style={{ backgroundColor: c }}
    >
      <Avatar
        src={`/ClassesIcon/${a}.png`}
        size="sm"
        className="select-none"
        draggable={false}
      />
    </div>
  );
}

export default function Puzzle() {
  const { posts, loader } = useData();

  const data = posts.slice();

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
          <div className="font-customNoto text-center text-white">
            Building Blocks ( Top/Oldest - Bottom/Latest )
          </div>
          <section className="flex flex-wrap gap-2 my-2 max-w-[1000px] px-4 justify-center md:justify-start mx-auto backdrop-blur-sm">
            {data.map((item) => (
              <CreateBox c={classColor(item.Class)} a={item.Class} />
            ))}
          </section>
        </div>
      )}
    </section>
  );
}
