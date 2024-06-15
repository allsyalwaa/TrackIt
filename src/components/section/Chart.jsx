import Chart from "react-apexcharts";

export default function ChartTest({ income, expenditure }) {
  const options = {
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Income", "Expenditure"],
    colors: ["#7AA500", "#EE0C00"],
  };

  const series = [income, expenditure];

  return (
    <div>
      <div id="chart">
        <Chart options={options} series={series} type="donut" width="100%" />
      </div>
    </div>
  );
}
