import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const CahrtComponent = ({ globalStats }) => {
  console.log(globalStats, "chart data");
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Active", "Deaths", "Recovered"],
          datasets: [
            {
              label: "# of cases",
              data: [
                globalStats.active,
                globalStats.deaths,
                globalStats.recovered,
              ],
              backgroundColor: ["#76B2E7", "#cf1322", "#81C784"],
              borderColor: ["#76B2E7", "#cf1322", "#81C784"],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={800}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
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

export default CahrtComponent;
