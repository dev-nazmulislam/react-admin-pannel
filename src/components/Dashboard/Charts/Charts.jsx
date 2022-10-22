import ActivityChart from "./ActivityChart";
import "./charts.css";
import OrdersChart from "./OrdersChart";
import TopProduct from "./TopProduct";

const Charts = () => {
  return (
    <div className="charts-container">
      <ActivityChart />
      <OrdersChart />
      <TopProduct />
    </div>
  );
};

export default Charts;
