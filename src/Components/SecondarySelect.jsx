import React from "react";
import { Select, Option, Avatar, Typography } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect } from "react";
import { haveProfile } from "../DataLogic/Profile";

export default function PlayerSelection({ allPlayers, onPlayerChange, watch }) {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    if (watch === 10) {
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

  let allPlayerUsers = [];

  for (let i = 0; i < allPlayers.length; i++) {
    let targetString = allPlayers[i].Player;
    allPlayerUsers.push(targetString);
  }

  const removeDupUserPlayers = [...new Set(allPlayerUsers)];

  const displayData = removeDupUserPlayers.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  const handleChange = (val) => {
    setValue(val);
    onPlayerChange(val);
  };

  return (
    <ThemeProvider value={customTheme}>
      <div className="min-w-[300px]">
        <Select label="Select Player" value={value} onChange={handleChange}>
          {displayData.map((obj) => (
            <Option value={obj}>
              <div className="flex items-center gap-2">
                <Typography className="text-[13px] font-customNoto text-white">{`${obj}`}</Typography>
                {haveProfile.includes(obj) && (
                  <Avatar
                    src={`/pfp/${obj}.png`}
                    size="xs"
                    variant="rounded"
                    className="rounded-md"
                  />
                )}
              </div>
            </Option>
          ))}
        </Select>
      </div>
    </ThemeProvider>
  );
}
