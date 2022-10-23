import "./charts.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Complete", value: 800 },
  { name: "Panding", value: 300 },
  { name: "Canceled", value: 200 },
];
const COLORS = ["#77A1EA", "#BE70FA", "#FD919D"];

const OrdersChart = () => {
  return (
    <div className="chart">
      <div className="chart-title">
        <h1>Order Stars</h1>
        <AiOutlineQuestionCircle />
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="90%" aspect={6 / 5}>
          <PieChart>
            <Pie
              data={data}
              margin={{
                top: 30,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-title">
        {data.map((d, index) => (
          <h1 key={index} style={{ color: COLORS[index], marginTop: "15px" }}>
            {d.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default OrdersChart;
