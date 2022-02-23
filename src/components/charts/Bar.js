import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarComponent = ({ globalStats }) => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Tests", "Active", "Deaths", "Recovered"],
          datasets: [
            {
              label: "Statistics Per Million",
              data: [
                globalStats.testsPerOneMillion,
                globalStats.activePerOneMillion,
                globalStats.deathsPerOneMillion,
                globalStats.recoveredPerOneMillion,
              ],
              backgroundColor: ["#76B2E7", "#cf1322", "#81C784", "#F47A37"],
              borderColor: ["#76B2E7", "#cf1322", "#81C784", "#F47A37"],
              borderWidth: 1,
            },
          ],
        }}
        height={250}
        width={700}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarComponent;
