import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 items-end my-0 lg:flex-row lg:justify-end lg:gap-6">
      <Typography
        as="li"
        className="p-1 font-customTitle flex space-x-2 items-center hover:scale-110 ease-in duration-300 transition-all hover:text-red-500"
      >
        <Link to={"/"} className="items-center font-customDiablo text-[18px]">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-customTitle flex space-x-2 items-center hover:scale-110 ease-in duration-300 transition-all hover:text-red-500"
      >
        <Link
          to={"/About"}
          className="items-center font-customDiablo text-[18px]"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-customTitle flex space-x-2 items-center hover:scale-110 ease-in duration-300 transition-all hover:text-red-500"
      >
        <Link
          to={"/Tools"}
          className="items-center font-customDiablo text-[18px]"
        >
          Resources
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-customTitle flex space-x-2 items-center hover:scale-110 ease-in duration-300 transition-all hover:text-red-500"
      >
        <Link
          to={"/Privacy"}
          className="items-center font-customDiablo text-[18px]"
        >
          Privacy
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-customTitle flex space-x-2 items-center hover:scale-110 ease-in duration-300 transition-all hover:text-red-500"
      >
        <Link
          to={"/Cookies"}
          className="items-center font-customDiablo text-[18px]"
        >
          Cookies
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-customTitle flex space-x-2 items-center hover:scale-110 ease-in duration-300 transition-all hover:text-red-500"
      >
        <Link
          to={"/TermsAndConditions"}
          className="items-center font-customDiablo text-[18px]"
        >
          Terms & Conditions
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-customTitle flex space-x-2 items-center hover:scale-110 ease-in duration-300 transition-all hover:text-red-500"
      >
        <Link
          to={"https://ko-fi.com/capricey23"}
          className="items-center font-customDiablo text-[18px]"
          target="_blank"
        >
          <Avatar
            src="/donation.png"
            size="xs"
            variant="rounded"
            className="me-1"
          />
          Donation
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="bg-black max-w-full border-0 px-4 py-2 rounded-none">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center">
              <Avatar src="/diablo4_icon.png" size="sm" />
            </div>
          </Link>

          <div className="hidden lg:block">{navList}</div>

          <div className="flex items-center lg:hidden">
            <IconButton
              variant="text"
              className="mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
        <div className="flex justify-center items-center gap-1 mt-2 text-[12px]">
          <div className="flex relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-400" />
          </div>

          <div className="text-white font-customNoto flex gap-1">
            <div>This website will transfer to:</div>
            <a href="https://diablo4pit.pages.dev/" className="text-blue-400">
              diablo4pit.pages.dev
            </a>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
