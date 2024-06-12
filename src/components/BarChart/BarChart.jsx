import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./BarChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ category, monthlyData }) {
  const data = {
    labels: Object.keys(monthlyData), // Only show the specific month
    datasets: [
      {
        label: category,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: Object.values(monthlyData),
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default BarChart;
