import "./BodyRecord.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import withLayout from "./withLayout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const plugin = {};

const options = {
  scales: {
    // Refer this https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration
    x: {
      grid: {
        color: "#777777",
        lineWidth: 3,
      },
      title: {
        color: "#ffffff",
      },
    },
    y: {
      display: false, // Remove vertical grid lines
    },
  },
  responsive: true,
  backgroundColor: "black",
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

const data = {
  labels,
  datasets: [
    {
      label: "waist",
      data: [49, 54, 52, 47, 46, 53, 55, 45, 50, 48, 51, 50],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
      // Refer this https://www.chartjs.org/docs/latest/charts/line.html
      borderWidth: 5,
    },
    {
      label: "weight",
      data: [49, 51, 55, 46, 54, 45, 52, 47, 50, 48, 53, 52],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
      borderWidth: 5,
    },
  ],
};

const actions = ["日", "週", "月", "年"];

const BodyRecord = ({
  shouldShowActions = true,
}: {
  shouldShowActions?: boolean;
}) => {
  return (
    <div
      className={`body-record ${
        shouldShowActions ? "" : "body-record--darker"
      }`}
    >
      <div className="body-record__chart">
        <Line options={options} data={data} />
      </div>
      {shouldShowActions && (
        <div className="body-record__actions">
          {actions.map((a) => (
            <div key={a} className="body-record__btn jp">
              {a}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodyRecord;

export const BodeRecordContainer = withLayout(<BodyRecord />);
