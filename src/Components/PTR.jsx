import { Link } from "react-router-dom";
import { Card, Button } from "@material-tailwind/react";

export function PTR() {
  return (
    <Card
      className="justify-center max-w-[1200px] gap-1 sm:gap-8 p-2 bg-transparent"
      shadow={false}
    >
      <div className="flex flex-col p-2 justify-center gap-2">
        <div>
          <div className="text-[#fbe85c] font-customDress text-[22px] sm:text-[28px] uppercase">
            Seaon 6 PTR Ladderboard (BETA)
          </div>
          <div className="text-[13px] font-customNoto text-gray-400">
            Creating and testing a new leaderboard for the upcoming Season 6,
            "Vessel of Hatred." We're incorporating new content, including
            runewords and other updates. This is not final and may be subject to
            change or removal based on the development of the PTR and the
            finalized live version of Season 6.
          </div>
        </div>
        <Link to={`/PTR_TEST`}>
          <Button className="flex items-center gap-2 font-customSource text-[12px] text-white bg-[#31376fcc]">
            View PTR
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
