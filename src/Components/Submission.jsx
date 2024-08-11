import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SubmissionCard({ title, link, bg = "submission.png" }) {
  return (
    <Card className="bg-black border-[2px] text-center border-[#28282b] relative group select-none hover:border-[#28282b] transition-all duration-500 ease-in">
      <Link to={link} target="_blank">
        <CardBody className="h-full w-full p-3 flex items-center flex-col justify-between z-20 relative overflow-hidden rounded-xl">
          <div
            style={{ backgroundImage: `url(/${bg})` }}
            className={`absolute h-full w-full top-0 right-0 bg-cover bg-center rounded-lg -z-10 opacity-50`}
          />
          <div className="flex flex-col gap-2 items-center justify-center">
            <Typography className="font-customDiablo text-white group-hover:text-[red] ease-in transition-colors duration-500 text-[16px]">
              {title}
            </Typography>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
