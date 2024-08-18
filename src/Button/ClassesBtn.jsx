import { Button, Avatar } from "@material-tailwind/react";

export default function ClassesBtn({ onButtonClick, classes }) {
  const allClasses = [
    "Latest",
    "Base Pit",
    "Unique Pit",
    "Speed 101",
    ...classes,
  ];

  return (
    <>
      <div className="flex justify-center gap-2 my-1 flex-wrap">
        {allClasses.slice(0, 4).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index).variant}
            onClick={onButtonClick(index).onClick}
            color="red"
            className="p-3 min-w-[80px] font-customDiablo text-[14px] shadow-[0_0_20px_black] hover:scale-105 duration-200 ease-in transition-all border-[2px] border-[#131111]"
          >
            {num}
          </Button>
        ))}
      </div>
      <div className="flex justify-center px-2 gap-2 my-1 flex-wrap">
        {allClasses.slice(3).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index + 4).variant}
            onClick={onButtonClick(index + 4).onClick}
            color="red"
            className="p-2 min-w-[120px] font-customDiablo text-[14px] shadow-[0_0_20px_black] relative border-[2px] border-[#131111] rounded-lg bg-transparent group hover:scale-105 duration-200 ease-in transition-all"
          >
            <div className="absolute bg-[black] h-full w-full top-0 left-0 -z-10" />
            <img
              src={`/bg/c${index + 1}.png`}
              alt="cover-bg"
              className="absolute h-full w-full top-0 left-0 object-cover -z-10 opacity-30"
            />
            <div className="flex flex-col justify-center items-center group-hover:text-[white] ease-in duration-200 transition-colors">
              <Avatar
                src={`/Classes/${num}.png`}
                size="sm"
                variant="rounded"
                draggable={false}
              />
              {num}
            </div>
          </Button>
        ))}
      </div>
    </>
  );
}
