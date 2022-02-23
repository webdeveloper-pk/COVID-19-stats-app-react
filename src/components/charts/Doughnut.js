import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutComponent = ({ globalStats }) => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Total Active", "Total Deaths", "Total Recovered"],
          datasets: [
            {
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

export default DoughnutComponent;
