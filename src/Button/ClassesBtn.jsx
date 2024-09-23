import { Button, Avatar } from "@material-tailwind/react";

export default function ClassesBtn({ onButtonClick, classes }) {
  const allClasses = ["Latest", "Hardcore", "Global", "Speed 101", ...classes];

  return (
    <>
      <div className="flex justify-center gap-2 my-1 flex-wrap">
        {allClasses.slice(0, 4).map((num, index) => (
          <Button
            key={index}
            disabled={num === `Latest` ? true : false}
            variant={onButtonClick(index).variant}
            onClick={onButtonClick(index).onClick}
            color="teal"
            className="p-2 font-customNoto uppercase text-[12px] hover:scale-105 duration-200 ease-in transition-all border-[2px] border-[black] text-white"
          >
            {num}
          </Button>
        ))}
      </div>
      <div className="flex justify-center px-2 gap-2 my-1 flex-wrap">
        {allClasses.slice(4).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index + 4).variant}
            onClick={onButtonClick(index + 4).onClick}
            color="teal"
            className="p-2 font-customNoto uppercase text-[12px] hover:scale-105 duration-200 ease-in transition-all border-[2px] border-[black] text-white"
          >
            {num}
          </Button>
        ))}
      </div>
    </>
  );
}
