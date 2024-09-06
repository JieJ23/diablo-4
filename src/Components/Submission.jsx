import { Link } from "react-router-dom";
import { Card, Button } from "@material-tailwind/react";

export function SubmitCard() {
  return (
    <Card
      className="justify-center max-w-[1200px] gap-1 sm:gap-8 p-2 bg-transparent"
      shadow={false}
    >
      <div className="flex flex-col p-2 justify-center gap-2">
        <div>
          <div className="text-[#868fed] font-customDress text-[22px] sm:text-[28px]">
            Divided by Class, United by Purpose
          </div>
          <div className="text-[13px] font-customNoto text-gray-400">
            Submit and showcase your gameplay, and become an active part of the
            community as we strive to reach the highest pit this season. Your
            journey is unique and deserves to be celebrated and remembered by
            all. Entries will primarily rely on contributions from players and
            community submissions, serving as the main source of content.
            Additionally, the developer will actively participate by submitting
            entries gathered from a variety of platforms to ensure a broader
            representation of the gaming experience.
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
