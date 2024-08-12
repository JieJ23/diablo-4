import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Tabs({ title }) {
  return (
    <div className="w-full 2xl:w-4/5 mx-auto mt-2 px-4 2xl:px-0 max-w-[1700px] select-none">
      <Breadcrumbs className="bg-transparent backdrop-blur-lg">
        <Link className=" text-white font-customDiablo text-[14px]" to={"/"}>
          Home
        </Link>
        <div className="text-[orange] cursor-default font-customDiablo text-[14px]">
          {title}
        </div>
      </Breadcrumbs>
    </div>
  );
}
