import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SubmitCard() {
  return (
    <Card className="w-full max-w-[800px] flex-row bg-gradient-to-b from-[#414476] to-black shadow-[0_0_30px_black] border-[2px] border-[#131111]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/bg/form.png")` }}
      />
      <CardBody>
        <Typography className="my-1 text-[20px] font-customDress text-white">
          Entry Submission
        </Typography>
        <Typography className="mb-8 text-[12px] font-customSource text-gray-400">
          Submit and showcase your gameplay, and become an active part of the
          community as we strive to reach the highest pit this season. Your
          journey is unique and deserves to be celebrated and remembered by all.
        </Typography>
        <Link
          to={`https://docs.google.com/spreadsheets/d/10WX_1NchCrfJuLMzU7PBB2iOWI98TmmPwtd_WCglpyo/pubhtml?gid=1154546550&single=true`}
          className="inline-block"
          target="_blank"
        >
          <Button
            variant="filled"
            color="white"
            className="flex items-center gap-2 font-customDress text-[12px] text-black"
          >
            Submit Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
