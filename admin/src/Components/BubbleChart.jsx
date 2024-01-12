import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: Array.from({ length: 15 }, () => ({
          x: getRandomNumber(-10, 100),
          y: getRandomNumber(-10, 50),
          r: getRandomNumber(5, 20),
        })),
        backgroundColor: "red",
      },
      {
        label: "Blue dataset",
        data: Array.from({ length: 10 }, () => ({
          x: getRandomNumber(-10, 100),
          y: getRandomNumber(-10, 50),
          r: getRandomNumber(5, 20),
        })),
        backgroundColor: "blue",
      },
      {
        label: "Orange dataset",
        data: Array.from({ length: 15 }, () => ({
          x: getRandomNumber(-10, 100),
          y: getRandomNumber(-10, 50),
          r: getRandomNumber(5, 20),
        })),
        backgroundColor: "orange",
      },
    ],
  };

  return (
    <>
      <div style={{ width: "950px", height: "210px" }}>
        <Bubble options={options} data={data} size="100%" />;
      </div>
    </>
  );
};

export default BubbleChart;
