import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Destroy the previous chart when the component is unmounted
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    //   labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [75, 25], // Values for the completed and remaining parts
        backgroundColor: ["#36A2EB", "#FF6384"], // Colors for the parts
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const options = {
    cutout: "70%", // Adjust the cutout percentage to create a donut chart
    maintainAspectRatio: false, // Make sure the chart doesn't maintain a fixed aspect ratio
  };

  return (
    <>
      <div style={{ width: "7vw" }}>
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
    </>
  );
};
export default DonutChart;
