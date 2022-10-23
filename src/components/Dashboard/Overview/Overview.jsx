import { FcCollapse } from "react-icons/fc";
import "./overview.css";
import NavBar from "../../Navbar/NavBar";
import NavItem from "../../Navbar/NavItem";
import OverviewChart from "./OverviewChart";

const Overview = () => {
  return (
    <div className="overview-container">
      <div
        className="overview-header"
        style={{
          position: "relative",
        }}
      >
        <h1>Overview</h1>
        <NavBar>
          <NavItem icon={<FcCollapse />} text="Sort by">
            <div className="dropdown-overview">
              <div className="overview-sort">
                <a href="#">Yearly</a>
                <a href="#">Monthly</a>
                <a href="#">Daily</a>
              </div>
            </div>
          </NavItem>
        </NavBar>
      </div>
      <div className="overview-items">
        <div className="overview-left">
          <div className="top">
            <div>
              <h2>This Month</h2>
              <h1>$24,568</h1>
            </div>
            <h3>+2.65%</h3>
          </div>
          <div className="bottom">
            <div className="bottom-item">
              <h1>Orders</h1>
              <h2>2652</h2>
            </div>
            <div className="bottom-item">
              <h1>Seles</h1>
              <h2>16,273</h2>
            </div>
            <div className="bottom-item">
              <h1>Order Value</h1>
              <h2>12.03%</h2>
            </div>
            <div className="bottom-item">
              <h1>Customers</h1>
              <h2>21,456</h2>
            </div>
            <div className="">
              <h1>Income</h1>
              <h2>$35,652</h2>
            </div>
            <div>
              <h1>Expensess</h1>
              <h2>$12,248</h2>
            </div>
          </div>
        </div>
        <div className="overview-right">
          <OverviewChart />
        </div>
      </div>
    </div>
  );
};

export default Overview;
