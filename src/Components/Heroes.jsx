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
    image: `class1`,
  },
  {
    title: `Build Variation`,
    summary: `All build variations and setups used for high-tier Pit completions. This collection highlights the most ideal and/or optimal builds used high-tier Pit runs.`,
    link: `/Builds`,
    image: `class2`,
  },
  {
    title: `Class Blocks`,
    summary: `Block builds: comprising all entries showcasing every class used and their popularity. Visualizing the pit balance environment of the class through pit clears.`,
    link: `/Puzzle`,
    image: `class3`,
  },
];

export function CardContent({ image, link, title, summary, btn = `Explore` }) {
  return (
    <Card className="bg-[#191a29] shadow-[0_0_30px_black] border-[#131111] border-[2px] group flex flex-col justify-between">
      <CardHeader
        color="black"
        className="h-56 bg-cover shadow-[0_0_20px_#131111] group-hover:scale-105 transition-all duration-300 ease-in"
        floated={false}
        style={{ backgroundImage: `url("/bg/${image}.png")` }}
      />
      <CardBody>
        <Typography className="mb-2 font-customDress font-bold text-[20px] text-white">
          {title}
        </Typography>
        <Typography className="text-[12px] text-white font-customSource">
          {summary}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={link}>
          <Button
            color="white"
            className="font-customDress group-hover:scale-110 group-hover:bg-[#2c3384] group-hover:text-[white] transition-all duration-300 ease-in"
          >
            {btn}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function Content() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] px-4 md:px-10 gap-4 justify-center mx-auto">
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
