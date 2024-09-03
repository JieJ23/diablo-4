import { Link } from "react-router-dom";
import { Card, Button } from "@material-tailwind/react";

export function SubmitCard() {
  return (
    <Card
      className="w-full flex flex-row justify-center h-[320px] max-w-[1200px] gap-1 sm:gap-8 p-2 bg-transparent"
      shadow={false}
    >
      <div
        className="w-3/5 sm:w-1/2 bg-cover bg-center rounded-2xl border-[1px] sm:border-[2px] border-black shadow-[0_0_20px_black]"
        style={{ backgroundImage: `url("/bg/s5.png")` }}
      />
      <div className="w-2/5 sm:w-1/2 flex flex-col p-2 justify-center gap-2">
        <div>
          <div className="text-[#868fed] font-customDiablo text-[14px] lg:text-[24px]">
            Divided by Class, United by Purpose
          </div>
          <div className="text-[12px] sm:text-[14px] font-customNoto text-gray-300">
            Submit and showcase your gameplay, and become an active part of the
            community as we strive to reach the highest pit this season. Your
            journey is unique and deserves to be celebrated and remembered by
            all.
          </div>
        </div>
        <Link
          to={`https://docs.google.com/spreadsheets/d/10WX_1NchCrfJuLMzU7PBB2iOWI98TmmPwtd_WCglpyo/pubhtml?gid=1154546550&single=true`}
          target="_blank"
        >
          <Button className="flex items-center gap-2 font-customSource text-[12px] text-white bg-[#31376fcc]">
            Submit Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </Card>
  );
}
