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

        <section className="text-center my-14 px-2">
          <div className="text-white font-customDiablo text-[22px] md:text-[32px]">
            Resources & Tools
          </div>
          <Resources />
        </section>

        <Footer />
      </div>
    </section>
  );
}
