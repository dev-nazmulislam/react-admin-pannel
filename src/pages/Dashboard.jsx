import Charts from "../components/Dashboard/Charts/Charts";
import OverviewChart from "../components/Dashboard/OverviewChart/OverviewChart";
import Profile from "../components/Dashboard/Profile/Profile";
import Widgets from "../components/Dashboard/Widgets/Widgets";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-content">
        <Widgets />
        <OverviewChart />
        <Charts />
      </div>
      <div className="right-content">{<Profile />}</div>
    </div>
  );
};

export default Dashboard;
