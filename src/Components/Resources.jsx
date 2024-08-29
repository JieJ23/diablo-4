import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const websiteObj = [
  {
    title: `Mobalytics GG`,
    summary: `Mobalytics is your all-in-one companion that makes mastering your favorite games easier.`,
    link: `https://mobalytics.gg/diablo-4`,
    image: `moba`,
  },
  {
    title: `Wowhead`,
    summary: `Wowhead is a website that provides a searchable database, internet forum, guides and player character services.`,
    link: `https://www.wowhead.com/diablo-4`,
    image: `wowhead`,
  },
  {
    title: `Maxroll GG`,
    summary: `Maxroll.gg is a popular website dedicated to providing useful information and resources for players of the popular video games like Diablo IV, Lost Ark, or Path of Exile.`,
    link: `https://maxroll.gg/d4`,
    image: `maxroll`,
  },
  {
    title: `D4Builds GG`,
    summary: `D4Builds.gg is a collection of hand-crafted top meta builds for Diablo 4.`,
    link: `https://d4builds.gg/`,
    image: `d4build`,
  },
  {
    title: `CN D2core`,
    summary: `暗黑核是暗黑破坏神核心玩家社区、提供暗黑4攻略、数据库、技能模拟、世界地图、交易市场等功能。`,
    link: `https://www.d2core.com`,
    image: `d2core`,
    btn: `阅读更多`,
  },
  {
    title: `KR D4 Inven`,
    summary: `디아블로4 정보, 뉴스, 공략, 거래소, 아이템 DB, 스킬 시뮬레이터, 팁과 공략, 커뮤니티.`,
    link: `https://diablo4.inven.co.kr/db/`,
    image: `krinven`,
    btn: `자세히 알아보기`,
  },
];

export function CardDefault({
  image,
  link,
  title,
  summary,
  btn = `Learn More`,
}) {
  return (
    <Card className="bg-gradient-to-b from-[#393c4f] to-black  group flex flex-col justify-between shadow-[0_0_30px_black] border-[1px] border-black">
      <CardHeader
        color="black"
        className="h-56 bg-cover bg-center shadow-[0_0_10px_black] transition-all duration-300 ease-in group-hover:scale-105"
        floated={false}
        style={{ backgroundImage: `url("/bg/${image}.png")` }}
      />
      <CardBody className="text-start">
        <Typography className="mb-2 font-customDress font-bold text-[20px] text-white">
          {title}
        </Typography>
        <Typography className="text-[12px] font-customSource text-gray-300">
          {summary}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-end">
        <Link to={link} target="_blank">
          <Button
            color="white"
            className="font-customSource group-hover:scale-110 group-hover:bg-[#2a4679] group-hover:text-[white] transition-all duration-300 ease-in"
          >
            {btn}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function Resources() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] 2xl:max-w-[1400px] px-2 md:px-6 gap-4 2xl:gap-6 justify-center mx-auto">
      {websiteObj.map((obj) => (
        <CardDefault
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
