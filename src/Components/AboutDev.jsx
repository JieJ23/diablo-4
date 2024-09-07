import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from "@material-tailwind/react";

import { classColor } from "./Accordion";

const historyObj = [
  { class: `Necromancer`, build: `Minion/Golem` },
  { class: `Barbarian`, build: `HOTA Bash` },
  { class: `Barbarian`, build: `Whirlwind Bleed` },
  { class: `Sorcerer`, build: `Frozen Orb Lightning Spear` },
  { class: `Rogue`, build: `Andy Barrage` },
];

export function AboutDev() {
  return (
    <div className="flex max-w-[1200px] flex-col justify-center text-center gap-y-8 my-10">
      <section className="flex flex-col max-w-[1200px] mx-auto w-full gap-2">
        <div className="text-[#868fed] font-customDress font-bold text-[22px] sm:text-[28px] uppercase">
          About
        </div>
        <div className="whitespace-pre-line font-customNoto text-[12px] sm:text-[13px] text-gray-400 sm:w-[80%] mx-auto">
          {`This website is the personal project of a Diablo 4 player who independently developed and maintains it. The developer embarked on their Diablo 4 adventure toward the end of Season 4, "Loot Reborn," starting with the Necromancer class as their first character. By the end of Season 4, the developer had played and experimented with both the Necromancer and Barbarian classes, delving into end-game content with each.
          
          At the start of Season 5, "Season of the Infernal Horde," the developer began with their preferred class, the Barbarian. They later transitioned to the Sorcerer class and are currently playing as a Rogue. The concept for this website began a few days after the start of Season 5, following the developer's exploration of end-game content with the Barbarian class. In the process of launching the website and compiling gameplay from players around the world, the developer was inspired to delve into the Sorcerer class and experiment with the popular "Forb LS" build, given its success in high Pit Tier clears and its overall ease of play and gear requirements. The developer is now exploring the Rogue class before the end of Season 5, with plans to begin Season 6 with the Spiritborn class, if they decide to purchase the DLC and continue maintaining the website.
          
          This website aims to archive Pit runs from players worldwide each season. Embracing the motto "East Meets West," it seeks to bridge the gap between communities that are often limited or restricted by geographical and language barriers.
          
          Please note that due to development and maintenance challenges, the website's URL or web address may change as needed to address these issues.`}
        </div>
      </section>
      <Card
        shadow={false}
        className="relative flex flex-col w-full max-w-[600px] h-[500px] items-center justify-end overflow-hidden text-center bg-transparent shadow-[0_0_15px_pink] mx-auto "
      >
        <CardHeader
          floated={false}
          shadow={false}
          className="absolute inset-0 m-0 h-full w-full rounded-lg bg-[url('/devCover.png')] bg-cover bg-center -z-10"
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <Typography className="whitespace-pre-line text-white my-5 font-customNoto text-[20px] sm:text-[24px]">
            {`Player-Created Content: 
          By Gamers, For Gamers`}
          </Typography>
          <Typography className="mb-4 text-white font-customNoto text-[14px]">
            CY
          </Typography>
          <Avatar
            size="lg"
            variant="circular"
            alt="Dev CY"
            className="shadow-[0_0_10px_pink]"
            src="/dev.png"
          />
        </CardBody>
      </Card>

      <section className="flex flex-col max-w-[1000px] mx-auto w-full gap-2">
        <div className="text-[#868fed] font-customDress font-bold text-[22px] uppercase">
          Build Played
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {historyObj.map((obj) => (
            <Chip
              value={`${obj.class}: ${obj.build}`}
              className="text-white font-customNoto text-[14px] p-2"
              variant="filled"
              style={{ backgroundColor: classColor(obj.class) }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
