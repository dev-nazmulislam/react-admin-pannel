import OverviewChart from "../components/OverviewChart/OverviewChart";
import Widgets from "../components/Widgets/Widgets";
import "./dashboard.css";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-content">
        <Widgets />
        <OverviewChart />
      </div>
      <div className="right-content">{<Profile />}</div>
    </div>
  );
};

export default Dashboard;
