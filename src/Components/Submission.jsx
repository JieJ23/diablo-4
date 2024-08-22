import { Typography, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SubmissionCard({ title, link, direction = "" }) {
  return (
    <Card className="bg-black min-w-[300px] h-[100px] text-center group select-none hover:shadow-[0_0_50px_white] transition-all duration-500 ease-in shadow-[0_0_40px_black] p-2 rounded-lg">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center rounded-lg opacity-60 group-hover:opacity-30 ease-in duration-500 transition-opacity"
        style={{ backgroundImage: `url("/bg/c2.png` }}
      />

      <Link
        to={link}
        target={direction}
        className="z-20 h-full flex items-center justify-center"
      >
        <Typography className="font-customDiablo text-black group-hover:text-white ease-in transition-all duration-500 text-[16px] group-hover:scale-[125%]">
          {title}
        </Typography>
      </Link>
    </Card>
  );
}
