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
    <Card className="bg-gradient-to-b from-[#3b426c] to-blue-gray-900 shadow-[0_0_30px_#28282b] group flex flex-col justify-between p-4 group">
      <div className="text-start p-2">
        <Typography className="mb-2 font-customDress text-[20px] text-white group-hover:text-[#7f81b7] ease-in duration-300 transition-all uppercase">
          {title}
        </Typography>
        <Typography className="text-[12px] font-customSource text-gray-300 group-hover:scale-[98%] ease-in duration-300 transition-all">
          {summary}
        </Typography>
      </div>
      <div
        color="black"
        className="h-56 bg-cover bg-center shadow-[0_0_20px_#131111] rounded-xl group-hover:scale-95 ease-in duration-300 transition-all"
        floated={false}
        style={{ backgroundImage: `url("/bg/${image}.png")` }}
      />
      <Link to={link} className="mt-4">
        <Button
          variant="filled"
          className="bg-[#31376fcc] group-hover:scale-95 ease-in duration-200 transition-all flex items-center gap-2 font-customSource text-[12px]"
        >
          To {title}
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
