import Resources from "../Components/Resources";
import { Footer } from "./Home";
import Navigation from "../Button/NavHead";

export default function Tools() {
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

        <section className="my-10 select-none">
          <div className="px-6 max-w-[1000px] mx-auto mb-10 rounded-lg">
            <div className="text-center text-[#868fed] font-customDress font-bold text-[24px] mb-2 uppercase">
              Resources & Tools
            </div>
            <div className="whitespace-pre-line text-gray-400 text-start font-customNoto text-[13px]">
              {`Here are a variety of resources and tools that players and communities frequently utilize. These include not only essential software and platforms but also specialized tools and community-driven resources that enhance the gaming experience and foster collaboration.
              
              Wowhead and Maxroll offer detailed and comprehensive guides covering every phase of the game, from leveling and end-game content to specialized areas. D4build and Mobalytics provide in-depth analysis on character development, focusing on skill point allocations and the setup of paragon boards. 
Lastly, D2Core and D4 Inven are websites utilized by the Chinese and Korean communities, respectively. These platforms offer similar functionality to those used by the Western community, providing resources and tools tailored to their audiences.`}
            </div>
          </div>
          <Resources />
        </section>

        <Footer />
      </div>
    </section>
  );
}
