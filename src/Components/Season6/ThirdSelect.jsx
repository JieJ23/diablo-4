import React from "react";
import { Select, Option, Avatar, Typography } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect } from "react";

export default function RunesSelection({
  allRunes,
  onRuneChange,
  watch,
  fulldata,
}) {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    if (watch === fulldata.length - 3) {
      return;
    } else {
      setValue(null);
    }
  }, [watch]);

  const customTheme = {
    select: {
      styles: {
        base: {
          select: {
            bg: "bg-[#28282bcc]",
          },
          arrow: {
            initial: {
              color: "text-white",
            },
          },
          menu: {
            bg: "bg-black",
            border: "border-2 border-[#28282b]",
            borderRadius: "rounded-xl",
          },
          option: {
            initial: {
              background: "hover:bg-red-400 focus:bg-red-400",
            },
            active: {
              bg: "bg-blue-500",
            },
          },
          label: {
            fontFamily: "font-customDiablo",
          },
        },
      },
    },
  };

  let allUsedRunes;

  function findAllRunes() {
    let holderRuneArr = [];

    for (let i = 0; i < allRunes.length; i++) {
      let targetString = allRunes[i]["Runewords"];
      let targetFormattedArr = targetString.split(`,`);
      let finaliedProcess = targetFormattedArr.map((item) => item.trim());
      holderRuneArr = [...holderRuneArr, ...finaliedProcess];
    }
    allUsedRunes = holderRuneArr;
  }
  findAllRunes();

  const removeDupAllUsedRunes = [...new Set(allUsedRunes)];

  const displayData = removeDupAllUsedRunes.sort();

  const handleChange = (val) => {
    setValue(val);
    onRuneChange(val);
  };

  return (
    <ThemeProvider value={customTheme}>
      <div className="min-w-[300px]">
        <Select label="Select Runewords" value={value} onChange={handleChange}>
          {displayData.map((obj) => (
            <Option value={obj}>
              <div className="flex items-center gap-2">
                <Avatar
                  src={`/Runewords/${obj}.png`}
                  size="xs"
                  variant="rounded"
                  className="rounded-sm"
                />
                <Typography className="text-[13px] font-customNoto text-white">{`${obj}`}</Typography>
              </div>
            </Option>
          ))}
        </Select>
      </div>
    </ThemeProvider>
  );
}
