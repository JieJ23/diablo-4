import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export function SubmitCard() {
  return (
    <Link
      to={`https://docs.google.com/forms/d/e/1FAIpQLSce0ljItcpQb7BJ3KMuSMFQI7-IVUJEy8qwDLz00tzUJlgBpw/viewform`}
      target="_blank"
    >
      <Button className="text-[12px] text-white bg-[#2e9067cc] flex items-center justify-center gap-2">
        <div className="flex relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </div>
        Submit Your Run
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
  );
}
