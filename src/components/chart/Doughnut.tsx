import { useEffect, useRef } from "react";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import { res } from "@/components/chart/ApiRes";

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);
const breakdownArr = Object.entries(res.data.breakdown);

const Doughnut = () => {
  const donutRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (donutRef.current) {
      const existing = Chart.getChart(donutRef.current);
      if (existing) existing.destroy();

      const ctx = donutRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: breakdownArr.map((item) => item[1].label),
            datasets: [
              {
                label: "Use of funds",
                data: breakdownArr.map((item) => item[1].value),
                backgroundColor: ["#f9cb9c", "#4285f4", "#c9dbf8", "#f5cbcc"],
                hoverBackgroundColor: [
                  "#f9cb9c",
                  "#4285f4",
                  "#c9dbf8",
                  "#f5cbcc",
                ],
                borderWidth: 0,
                animation: {
                  easing: "linear",
                  duration: 1000,
                  delay: 1.5,
                },
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: "Use of funds",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        });
      }
    }
  }, [breakdownArr]);

  return (
    <div>
      <canvas ref={donutRef} id="myChart" />
    </div>
  );
};

export default Doughnut;
