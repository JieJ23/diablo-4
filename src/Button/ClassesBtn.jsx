import { Button, Avatar } from "@material-tailwind/react";

export default function ClassesBtn({ onButtonClick, classes }) {
  const allClasses = ["Base Pit", "Unique Pit", "Speed 101", ...classes];

  return (
    <>
      <div className="flex justify-center gap-2 my-1 flex-wrap">
        {allClasses.slice(0, 3).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index).variant}
            onClick={onButtonClick(index).onClick}
            color={"white"}
            className="p-2 min-w-[80px] font-customDiablo text-[14px] shadow-[0_0_20px_black]"
          >
            <div className="flex flex-col justify-center items-center">
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
      <div className="flex justify-center gap-2 my-1 flex-wrap">
        {allClasses.slice(3).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index + 3).variant}
            onClick={onButtonClick(index + 3).onClick}
            color={"white"}
            className="p-2 min-w-[80px] font-customDiablo text-[14px] shadow-[0_0_20px_black]"
          >
            <div className="flex flex-col justify-center items-center">
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
