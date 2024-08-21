import React from "react";
import Chart from "react-apexcharts";
import { Card, CardBody } from "@material-tailwind/react";
import { useData } from "../Hook/DataFetch";

export default function ClassChart() {
  const { posts, loader } = useData();

  const allClass = [...new Set(posts.map((obj) => obj.Class))].map((ite) =>
    ite.slice(0, 4)
  );

  const classNums = [];

  for (let i = 0; i < allClass.length; i++) {
    let temp = posts.filter((obj) => obj.Class.slice(0, 4) === allClass[i]);
    let totalCount = temp.length;
    classNums.push(totalCount);
  }

  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Count",
        data: classNums,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: true,
      },
      colors: ["#0A8270"],
      plotOptions: {
        bar: {
          columnWidth: "75%",
          borderRadius: 10,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#fff",
            fontSize: "10px",
            fontFamily: "Monospace",
          },
        },
        categories: allClass,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
            fontSize: "10px",
            fontFamily: "Monospace",
          },
        },
      },
      grid: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <Card className="bg-[#131111] opacity-90" shadow={false}>
      <div className="text-[20px] text-white text-center font-customDress mt-2 select-none">
        Popularity
      </div>
      <CardBody className="pb-2 pt-0 select-none pointer-events-none">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
