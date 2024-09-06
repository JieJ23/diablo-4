import Navigation from "../Button/NavHead";
import { Footer } from "./Home";
import { AboutDev } from "../Components/AboutDev";

export default function About() {
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

        <div className="flex justify-center px-4">
          <AboutDev />
        </div>

        <Footer />
      </div>
    </section>
  );
}
