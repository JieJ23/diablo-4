import { Button, Avatar } from "@material-tailwind/react";

export default function ClassesBtn({ onButtonClick, classes }) {
  const allClasses = ["Latest", "Hardcore", "Global", "Speed 101", ...classes];

  return (
    <>
      <div className="flex justify-center gap-2 my-1 flex-wrap">
        {allClasses.slice(0, 4).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index).variant}
            onClick={onButtonClick(index).onClick}
            color="red"
            className="p-3 min-w-[80px] font-customSource uppercase text-[14px] shadow-[0_0_20px_red] hover:scale-105 duration-200 ease-in transition-all border-[2px] border-[black] bg-[#151515cc]"
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
            color="red"
            className="p-2 min-w-[120px] font-customSource uppercase text-[14px] shadow-[0_0_20px_red] relative border-[2px] border-[black] rounded-lg bg-[#0d1c2ecc] group hover:scale-105 duration-200 ease-in transition-all"
          >
            <div className="flex flex-col justify-center items-center group-hover:text-[red] ease-in duration-200 transition-colors">
              <Avatar
                src={`/Classes/${num}.png`}
                size="sm"
                variant="rounded"
                draggable={false}
                className="group-hover:animate-spin"
              />
              {num}
            </div>
          </Button>
        ))}
      </div>
    </>
  );
}
