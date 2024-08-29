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
    summary: `Block builds: comprising all entries showcasing every class used and their popularity. Visualizing the pit balance environment of the class through pit clears.`,
    link: `/Puzzle`,
    image: `stats`,
  },
];

export function CardContent({ image, link, title, summary }) {
  return (
    <Card className="bg-gradient-to-t from-[#393c4f] to-black shadow-[0_0_30px_#28282b] group flex flex-col justify-between p-4 group">
      <Link to={link}>
        <div className="text-start p-2">
          <Typography className="mb-2 font-customDress font-bold text-[20px] text-white group-hover:text-[#7f81b7] ease-in duration-300 transition-all">
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
      </Link>
    </Card>
  );
}

export default function Content() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] px-2 md:px-10 gap-6 justify-center mx-auto">
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
