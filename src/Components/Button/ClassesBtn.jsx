import { Button, Avatar } from "@material-tailwind/react";

export default function ClassesBtn({ onButtonClick, classes }) {
  const allClasses = ["All", ...classes];

  return (
    <div className="flex justify-center gap-2 p-4 flex-wrap">
      {allClasses.map((num, index) => (
        <Button
          key={index}
          variant={onButtonClick(index).variant}
          onClick={onButtonClick(index).onClick}
          color={"white"}
          className="p-3 font-customDiablo text-[12px] md:text-[18px] shadow-[0_0_10px_black]"
        >
          <div className="flex flex-col justify-center items-center">
            <Avatar src={`/Classes/${num}.png`} size="md" variant="rounded" />
            {num.slice(0, 4)}
          </div>
        </Button>
      ))}
    </div>
  );
}
