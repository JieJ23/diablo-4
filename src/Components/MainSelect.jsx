import React from "react";
import { Select, Option, Avatar, Typography } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect } from "react";

export default function SkillsSelection({
  allSkills,
  onSkillChange,
  watch,
  fullcategory,
}) {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    if (watch === fullcategory.length - 1) {
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

  let allUsedSkills;

  function findAllUniqueSkills() {
    let holderSkillArr = [];

    for (let i = 0; i < allSkills.length; i++) {
      let targetString = allSkills[i]["Skills Used"];
      let targetFormattedArr = targetString.split(`,`);
      let finaliedProcess = targetFormattedArr.map((item) => item.trim());
      holderSkillArr = [...holderSkillArr, ...finaliedProcess];
    }
    allUsedSkills = holderSkillArr;
  }
  findAllUniqueSkills();

  const removeDupAllUsedSkills = [...new Set(allUsedSkills)];

  const displayData = removeDupAllUsedSkills.sort();

  const handleChange = (val) => {
    setValue(val);
    onSkillChange(val);
  };

  return (
    <ThemeProvider value={customTheme}>
      <div className="max-w-[400px] flex justify-center mx-auto w-full my-5">
        <Select label="Select Skills" value={value} onChange={handleChange}>
          {displayData.map((obj) => (
            <Option value={obj}>
              <div className="flex items-center gap-2">
                <Avatar
                  src={`/Skills/${obj}.png`}
                  size="xs"
                  variant="rounded"
                  className="rounded-sm"
                />
                <Typography className="text-[14px] font-customDiablo text-white">{`${obj}`}</Typography>
              </div>
            </Option>
          ))}
        </Select>
      </div>
    </ThemeProvider>
  );
}
