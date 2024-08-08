import {
  Card,
  CardFooter,
  Typography,
  List,
  ListItem,
  Avatar,
} from "@material-tailwind/react";

import { useData } from "../Hook/DataFetch";
import DataLoadingLoader from "../Hook/Loader";

export default function PitLadder() {
  const { posts, loader } = useData();

  const displayData = posts;

  return (
    <>
      {loader ? (
        <DataLoadingLoader />
      ) : (
        <Card className="w-full mx-auto max-w-[1400px] my-5 border-[1px] border-[#131111] bg-transparent backdrop-blur-md">
          <div className="text-[48px] text-center my-5 text-[white] font-customDiablo">
            Diablo 4: The Pit
          </div>
          <List>
            <ListItem className="select-none pointer-events-none flex justify-between">
              <div className="text-[white] text-[18px] flex-1 text-center font-customDiablo ">
                Player
              </div>
              <div className="text-[white] text-[18px] flex-1 text-center font-customDiablo ">
                Class
              </div>
              <div className="text-[white] text-[18px] flex-1 text-center font-customDiablo ">
                Tier
              </div>
              <div className="text-[white] text-[18px] flex-1 text-center font-customDiablo ">
                Build
              </div>
              <div className="text-[white] text-[18px] flex-1 text-center font-customDiablo ">
                Time
              </div>
              <div className="text-[white] text-[18px] flex-1 text-center font-customDiablo ">
                Video
              </div>
            </ListItem>
            {displayData.map((obj, index) => (
              <ListItem className="select-none pointer-events-none flex justify-between bg-transparent">
                <div className="text-white flex-1 text-center">
                  {obj.Player}
                </div>
                <div className="flex-1 text-center">
                  <Avatar src={`/Classes/${obj.Class}.png`} />
                </div>
                <div className="text-white flex-1 text-center">{obj.Tier}</div>
                <div className="text-white flex-1 text-center">{obj.Build}</div>
                <div className="text-white flex-1 text-center">{obj.Time}</div>

                <div className="flex-1 flex justify-center">
                  <a href={obj.Video} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="white"
                      className="w-6 h-6 z-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      )}
    </>
  );
}
