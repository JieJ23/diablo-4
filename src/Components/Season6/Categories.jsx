import { Button, Avatar } from "@material-tailwind/react";

export default function S6CategoryBtns({ onButtonClick, classes }) {
  const allClasses = ["Latest", "Hardcore", "Global", ...classes];

  return (
    <>
      <div className="flex justify-center gap-2 my-1 flex-wrap">
        {allClasses.slice(0, 3).map((num, index) => (
          <Button
            key={index}
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
        {allClasses.slice(3).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index + 3).variant}
            onClick={onButtonClick(index + 3).onClick}
            color="teal"
            className="p-2 font-customNoto uppercase text-[12px] hover:scale-105 duration-200 ease-in transition-all border-[2px] border-[black]"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[red] ease-in duration-200 transition-colors text-white">
              {num}
            </div>
          </Button>
        ))}
      </div>
    </>
  );
}
