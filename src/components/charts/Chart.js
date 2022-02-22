import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import lineChart from "./configs/lineChart";

function LineChart() {
  const { Title } = Typography;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Active Users</Title>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={322}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
