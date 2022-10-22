import "./charts.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    curent: 590,
    previus: 440,
  },
  {
    name: "Sun",
    curent: 440,
    previus: 470,
  },
  {
    name: "Mon",
    curent: 470,
    previus: 720,
  },
  {
    name: "Tue",
    curent: 720,
    previus: 650,
  },
  {
    name: "Wed",
    curent: 650,
    previus: 800,
  },
  {
    name: "Thu",
    curent: 800,
    previus: 720,
  },
  {
    name: "Fri",
    curent: 720,
    previus: 420,
  },
  {
    name: "Sat",
    curent: 420,
    previus: 700,
  },
  {
    name: "Sun",
    curent: 700,
    previus: 580,
  },
  {
    name: "Mon",
    curent: 580,
    previus: 480,
  },
  {
    name: "Tue",
    curent: 480,
    previus: 520,
  },
  {
    name: "Wed",
    curent: 700,
    previus: 570,
  },
  {
    name: "Thu",
    curent: 800,
    previus: 720,
  },
  {
    name: "Fri",
    curent: 720,
    previus: 420,
  },
  {
    name: "Sat",
    curent: 420,
    previus: 700,
  },
  {
    name: "Sun",
    curent: 700,
    previus: 580,
  },
  {
    name: "Mon",
    curent: 580,
    previus: 480,
  },
  {
    name: "Tue",
    curent: 480,
    previus: 520,
  },
  {
    name: "Wed",
    curent: 700,
    previus: 570,
  },
  {
    name: "Thu",
    curent: 800,
    previus: 720,
  },
  {
    name: "Fri",
    curent: 720,
    previus: 420,
  },
  {
    name: "Sat",
    curent: 590,
    previus: 440,
  },
  {
    name: "Sun",
    curent: 440,
    previus: 470,
  },
  {
    name: "Mon",
    curent: 470,
    previus: 720,
  },
  {
    name: "Tue",
    curent: 720,
    previus: 650,
  },
  {
    name: "Wed",
    curent: 650,
    previus: 800,
  },
  {
    name: "Thu",
    curent: 800,
    previus: 720,
  },
  {
    name: "Fri",
    curent: 720,
    previus: 420,
  },
  {
    name: "Sat",
    curent: 420,
    previus: 700,
  },
  {
    name: "Sun",
    curent: 700,
    previus: 580,
  },
];

const ActivityChart = () => {
  const sum = data.reduce((accumulator, object) => {
    return accumulator + object.curent;
  }, 0);

  return (
    <div className="chart">
      <div className="chart-title">
        <h1>User Activity</h1>
        <AiOutlineQuestionCircle />
      </div>
      <div className="chart-info">
        <h1>This Month</h1>
        <h2>{sum}</h2>
      </div>
      <div className="chart-status">
        <div>
          <div className="curent"></div>
          <span>Curent</span>
        </div>
        <div>
          <div className="previus"></div>
          <span>Previus</span>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <AreaChart
            data={data}
            margin={{
              top: 30,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="curent"
              stroke="#8884d8"
              fill="#D7E3F9"
            />
            <Area
              type="monotone"
              dataKey="previus"
              stroke="#8884d8"
              fill="#EEDFE6"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
