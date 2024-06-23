import React, { useEffect, useRef } from "react";
import { pieRes as data } from "@/components/chart/ApiRes";
import { Chart, ArcElement, Tooltip, Legend, PieController } from "chart.js";

interface PieProps {}

Chart.register(ArcElement, Tooltip, Legend, PieController);

const graphData = data.reportData;

const calculateTotals = (data: typeof graphData) => {
  const totals: { [key: string]: number } = {};

  data.forEach((report) => {
    const values = report.values;
    for (const category in values) {
      if (!totals[category]) {
        totals[category] = 0;
      }
      //   @ts-ignore
      totals[category] += Object.values(values[category]).reduce(
        // @ts-ignore
        (sum, value) => sum + value,
        0
      );
    }
  });

  return totals;
};

const PieChart: React.FC<PieProps> = () => {
  const pieRef = useRef<HTMLCanvasElement | null>(null);
  const totals = calculateTotals(graphData);
  const labels = Object.keys(totals).map(
    (label) => label.charAt(0).toUpperCase() + label.slice(1)
  );
  const dataValues = Object.values(totals);

  useEffect(() => {
    if (pieRef.current) {
      const existing = Chart.getChart(pieRef.current);
      if (existing) existing.destroy();

      const ctx = pieRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: labels,
            datasets: [
              {
                data: dataValues,
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
                hoverBackgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
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
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  boxWidth: 12,
                  font: {
                    weight: "normal",
                  },
                },
              },
            },
          },
        });
      }
    }
  }, [graphData]);

  return (
    <div>
      <canvas ref={pieRef} id="myChart" />
    </div>
  );
};
export default PieChart;
