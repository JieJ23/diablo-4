import { Typography } from "@material-tailwind/react";

export const fetchdomain = `https://script.google.com/`;

export default function DataLoadingLoader() {
  return (
    <>
      <section className="flex justify-center items-center gap-4 my-10">
        <Typography
          color="white"
          className="z-10 font-customDiablo text-[28px]"
        >
          Loading Data...
        </Typography>
      </section>
    </>
  );
}

export function DataLoadingLoader2() {
  return (
    <>
      <section className="flex justify-center items-center gap-4 my-10 w-full">
        <Typography
          color="white"
          className="z-10 font-customDiablo text-[28px]"
        >
          Fetching Data...
        </Typography>
      </section>
    </>
  );
}
