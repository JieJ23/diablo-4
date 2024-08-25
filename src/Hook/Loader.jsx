import { Typography } from "@material-tailwind/react";

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
