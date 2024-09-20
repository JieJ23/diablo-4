import { Typography } from "@material-tailwind/react";

export const thirdpart = `NwjFEB4AfEol1D4H8eT92gWQd-/exec`;

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
