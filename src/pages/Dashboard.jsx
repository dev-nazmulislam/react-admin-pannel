import Charts from "../components/Dashboard/Charts/Charts";
import Overview from "../components/Dashboard/Overview/Overview";
import Profile from "../components/Dashboard/Profile/Profile";
import Widgets from "../components/Dashboard/Widgets/Widgets";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-content">
        <Widgets />
        <Overview />
        <Charts />
      </div>
      <div className="right-content">{<Profile />}</div>
    </div>
  );
};

export default Dashboard;
