import { CardBody, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

// export function CardHorizontal({ title, link, bg, direction = "", short }) {
//   return (
//     <Link to={link} target={direction} className="group">
//       <div className="flex flex-col md:flex-row bg-[transparent] rounded-2xl p-4 gap-2 h-full">
//         <Card className="mx-auto select-none min-w-[150px] min-h-[250px] w-[350px] flex-1 bg-transparent">
//           <div
//             style={{ backgroundImage: `url(/bg/${bg}.png` }}
//             className={`absolute h-full w-full top-0 right-0 bg-cover bg-center rounded-2xl shadow-[0_0_30px_#153049]
//               group-hover:shadow-[0_0_30px_#3c6c97] transition-all ease-in duration-300 group-hover:scale-95`}
//           />
//         </Card>

//         <div className="flex flex-1 flex-col gap-2 justify-center p-2 font-customLato text-blue-gray-400 rounded-xl">
//           <Typography
//             className="text-[30px] font-customDress font-bold group-hover:text-[#3c6c97] transition-all ease-in duration-300 group-hover:scale-110"
//             color="white"
//           >
//             {title}
//           </Typography>
//           <Typography
//             className=" text-[12px] md:text-[14px] font-customNoto text-center md:text-start group-hover:scale-95 transition-all ease-in duration-300"
//             color="white"
//           >
//             {short}
//           </Typography>
//         </div>
//       </div>
//     </Link>
//   );
// }

export function Card1({ title, summary, directs, bg }) {
  return (
    <Card className="bg-[black] relative group shadow-[0_0_20px_black] hover:shadow-[0_0_20px_#3c6c97] duration-500 ease-in transition-all border-[1px] border-[#28282b]">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover rounded-xl opacity-55"
        style={{ backgroundImage: `url("/bg/${bg}.png` }}
      />
      <Link to={directs} className="z-20">
        <CardBody className="flex flex-col gap-4 justify-between h-full">
          <Typography className="font-customDiablo mb-2 text-white text-[18px] group-hover:scale-110 ease-in duration-500 transition-all group-hover:text-[#58a1e5]">
            {title}
          </Typography>

          <Typography className="font-customNoto text-[10px] text-white group-hover:scale-90 ease-in duration-500 transition-all">
            {summary}
          </Typography>

          <div className="font-customDiablo text-white group-hover:scale-125 ease-in duration-500 transition-all group-hover:text-[#c94f4f]">
            Access
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
