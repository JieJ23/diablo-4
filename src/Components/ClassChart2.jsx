import { Card, CardBody } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useData } from "../Hook/DataFetch";

export default function ClassChart2() {
  const { posts, loader } = useData();

  const target = [...new Set(posts.map((o) => o.Class))];
  const allValues = [];
  const avgValues = [];

  for (let z = 0; z < target.length; z++) {
    let temp = posts.filter((o) => o.Class === target[z]);
    let sortedTemp = temp.sort((a, b) => b.Tier - a.Tier);
    let highest = sortedTemp[0].Tier;
    allValues.push(highest);
  }

  for (let y = 0; y < target.length; y++) {
    let temp = posts
      .filter((o) => o.Class === target[y])
      .filter((p) => p.Tier > 101);
    // let uniqueV = [...new Set(temp.map((o) => o.Tier))].sort().reverse();

    let allV = [];

    for (let a = 0; a < temp.length; a++) {
      let tempV = temp[a].Tier;
      allV.push(tempV);
    }

    let targetSegment = allV.slice();

    let totalCount = 0;
    let totalSize = targetSegment.length;

    for (let g = 0; g < targetSegment.length; g++) {
      let eachValue = targetSegment[g];
      totalCount += eachValue;
    }

    const avgClass = Math.round(totalCount / totalSize);
    avgValues.push(avgClass);
  }

  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Class",
        data: allValues,
      },
      {
        name: "Avg",
        data: avgValues,
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ["#008080", "#f00"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          style: {
            colors: "#fff",
            fontSize: "10px",
            fontFamily: "monospace",
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
            fontSize: "10px",
            fontFamily: "monospace",
          },
        },
      },
      labels: ["Sorc", "Drui", "Rogu", "Necr", "Barb"],
      grid: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
        enabled: false,
      },
    },
  };

  return (
    <Card className="bg-[#131111] opacity-90" shadow={false}>
      <div className="text-[20px] text-[#868fed] text-center font-customDress mt-2 select-none">
        Balance Trend
      </div>
      <div className="text-[13px] text-gray-400 text-center font-customSource mt-2 select-none">
        Highest & Avg (Overall Entries T101 & Above)
      </div>
      <CardBody className="px-2 pb-2 pt-0 select-none pointer-events-none">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
