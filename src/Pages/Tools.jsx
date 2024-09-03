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

        <section className="my-10">
          <div className="px-6 max-w-[1000px] mx-auto mb-10 rounded-lg">
            <div className="text-center text-[#868fed] font-customDiablo font-bold text-[36px] mb-2">
              Resources & Tools
            </div>
            <div className="whitespace-pre-line text-white text-start font-customNoto text-[14px]">
              {`Explore and discover a wide variety of resources and tools created by developers from around the world for the Diablo 4 community, ranging from guides and forums to build simulators. Below are some resources commonly used or included by players in their submissions.`}
            </div>
          </div>
          <Resources />
        </section>

        <Footer />
      </div>
    </section>
  );
}
