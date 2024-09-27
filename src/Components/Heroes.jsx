import {
  CardHeader,
  CardBody,
  Card,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const contentObj = [
  {
    title: `Pit Ladderboard`,
    summary: `Main ladderboards for The Pit of Artificers, showcasing high-tier clears from various players across different communities.`,
    link: `/Ladderboard`,
    image: `leaderboard`,
  },
  {
    title: `Build Variation`,
    summary: `All build variations and setups used for high-tier Pit completions. This collection highlights the most ideal and/or optimal builds used high-tier Pit runs.`,
    link: `/Builds`,
    image: `skills`,
  },
  {
    title: `Class Blocks`,
    summary: `Comprising all entries showcasing every class used and their popularity. Visualizing the pit balance environment of the class through pit clears.`,
    link: `/Puzzle`,
    image: `stats`,
  },
];

export function CardContent({ image, link, title, summary }) {
  return (
    <Card className="bg-transparent group flex flex-col justify-between py-2 px-4 group">
      <div className="text-center p-2">
        <Typography className="mb-2 font-customDiablo text-[16px] text-[white] uppercase">
          {title}
        </Typography>
        <Typography className="text-[12px] font-customSource text-gray-400 group-hover:scale-[98%] ease-in duration-300 transition-all">
          {summary}
        </Typography>
      </div>
      <div
        color="black"
        className="h-56 bg-cover bg-center shadow-[0_0_20px_black] rounded-xl group-hover:scale-95 ease-in duration-300 transition-all"
        style={{ backgroundImage: `url("/bg/${image}.png")` }}
      />
      <Link to={link} className="mt-2 flex justify-center">
        <Button
          variant="filled"
          className="bg-[transparent] group-hover:text-[#eda531] group-hover:scale-110 ease-in duration-200 transition-all flex items-center gap-2 font-customNoto text-[12px]"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Link>
    </Card>
  );
}

export default function Content() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] px-1 gap-4 justify-center mx-auto">
      {contentObj.map((obj) => (
        <CardContent
          title={obj.title}
          summary={obj.summary}
          link={obj.link}
          image={obj.image}
          btn={obj.btn}
        />
      ))}
    </section>
  );
}
