import { CardBody, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CardHorizontal({ title, link, bg, direction = "", short }) {
  return (
    <Link to={link} target={direction} className="group">
      <div className="flex flex-col md:flex-row bg-[transparent] rounded-2xl p-4 gap-2 h-full">
        <Card className="mx-auto select-none min-w-[150px] min-h-[250px] w-[400px] flex-1 bg-transparent">
          <div
            style={{ backgroundImage: `url(/bg/${bg}.png` }}
            className={`absolute h-full w-full top-0 right-0 bg-cover bg-center rounded-2xl shadow-[0_0_30px_#153049]
              group-hover:shadow-[0_0_30px_#3c6c97] transition-all ease-in duration-300 group-hover:scale-95`}
          />
        </Card>

        <div className="flex flex-1 flex-col gap-2 justify-center p-2 font-customLato text-blue-gray-400 rounded-xl">
          <Typography
            className="text-[30px] font-customDress font-bold group-hover:text-[#3c6c97] transition-all ease-in duration-300 group-hover:scale-110"
            color="white"
          >
            {title}
          </Typography>
          <Typography
            className=" text-[12px] md:text-[14px] font-customNoto text-center md:text-start group-hover:scale-95 transition-all ease-in duration-300"
            color="white"
          >
            {short}
          </Typography>
        </div>
      </div>
    </Link>
  );
}

export function CardHorizontalRight({
  title,
  link,
  bg,
  direction = "",
  short,
}) {
  return (
    <Link to={link} target={direction} className="group">
      <div className="flex flex-col md:flex-row bg-[transparent] rounded-2xl p-4 gap-2 h-full">
        <div className="flex flex-1 flex-col gap-2 justify-center p-2 font-customLato text-blue-gray-400 rounded-xl order-2 sm:order-1">
          <Typography
            className="text-[30px] font-customDress font-bold group-hover:text-[#3c6c97] transition-all ease-in duration-300 group-hover:scale-110"
            color="white"
          >
            {title}
          </Typography>
          <Typography
            className=" text-[12px] md:text-[14px] font-customNoto text-center md:text-start group-hover:scale-95 transition-all ease-in duration-300"
            color="white"
          >
            {short}
          </Typography>
        </div>

        <Card className="mx-auto select-none min-w-[150px] min-h-[250px] w-[400px] flex-1 bg-transparent order-1 md:order-2">
          <div
            style={{ backgroundImage: `url(/bg/${bg}.png` }}
            className={`absolute h-full w-full top-0 right-0 bg-cover bg-center rounded-2xl shadow-[0_0_30px_#153049]
              group-hover:shadow-[0_0_30px_#3c6c97] transition-all ease-in duration-300 group-hover:scale-95`}
          />
        </Card>
      </div>
    </Link>
  );
}
