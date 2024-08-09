import { Button, Avatar } from "@material-tailwind/react";

export default function ClassesBtn({ onButtonClick, classes }) {
  const allClasses = ["Latest", "Pit", ...classes];

  return (
    <>
      <div className="flex justify-center gap-2 p-4 py-2 flex-wrap">
        {allClasses.slice(0, 2).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index).variant}
            onClick={onButtonClick(index).onClick}
            color={"white"}
            className="p-5 font-customDiablo text-[12px] md:text-[16px] shadow-[0_0_10px_black]"
          >
            <div className="flex flex-col justify-center items-center">
              <Avatar
                src={`/Classes/${num}.png`}
                size="md"
                variant="rounded"
                draggable={false}
                className={`${
                  num === `Pit` && `shadow-[0_0_30px_red] rounded-full`
                }`}
              />
              {num}
            </div>
          </Button>
        ))}
      </div>
      <div className="flex justify-center gap-2 p-4 py-2 flex-wrap">
        {allClasses.slice(2).map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index + 2).variant}
            onClick={onButtonClick(index + 2).onClick}
            color={"white"}
            className="p-3 font-customDiablo text-[12px] md:text-[16px] shadow-[0_0_10px_black]"
          >
            <div className="flex flex-col justify-center items-center">
              <Avatar
                src={`/Classes/${num}.png`}
                size="md"
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
