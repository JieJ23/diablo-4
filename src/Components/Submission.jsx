import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SubmissionCard({ title, link, direction = "" }) {
  return (
    <Card className="bg-black text-center group select-none hover:shadow-[0_0_15px_#58a1e5] transition-all duration-500 ease-in shadow-[0_0_15px_pink] p-2">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center rounded-lg opacity-60 group-hover:opacity-30 ease-in duration-500 transition-opacity"
        style={{ backgroundImage: `url("/bg/c2.png` }}
      />

      <Link to={link} target={direction} className="z-20">
        <CardBody className="h-full w-full p-3 flex items-center flex-col justify-between z-20">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Typography className="font-customDiablo text-white group-hover:text-[#58a1e5] ease-in transition-all duration-500 text-[16px] group-hover:scale-[110%]">
              {title}
            </Typography>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
