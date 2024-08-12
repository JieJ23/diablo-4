import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SubmissionCard({ title, link, direction = "" }) {
  return (
    <Card className="border-double border-[2px] border-[#28282b] text-center group select-none hover:shadow-[0_0_20px_red] transition-all duration-500 ease-in bg-gradient-to-tr from-gray-700 via-red-gray-500 to-black">
      <Link to={link} target={direction}>
        <CardBody className="h-full w-full p-3 flex items-center flex-col justify-between z-20">
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
