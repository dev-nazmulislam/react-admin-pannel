import { useState } from "react";
import { FcCollapse } from "react-icons/fc";
import "./overviewChart.css";
import { CSSTransition } from "react-transition-group";
import NavBar from "../../Navbar/NavBar";
import NavItem from "../../Navbar/NavItem";

const OverviewChart = () => {
  const [activeMenu, setActiveMenu] = useState("main");

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
              <CSSTransition
                in={activeMenu === "main"}
                timeout={500}
                unmountOnExit
              >
                <div className="overview-items">
                  <a href="#">Yearly</a>
                  <a href="#">Monthly</a>
                  <a href="#">Daily</a>
                </div>
              </CSSTransition>
            </div>
          </NavItem>
        </NavBar>
      </div>
      <div className="overview-main">
        <div className="overview-left">
          <div className="top">
            <div>
              <h2>This Month</h2>
              <h1>$24,568</h1>
            </div>
            <h3>+2.65%</h3>
          </div>
          <div className="bottom">
            <table>
              <tr>
                <td>
                  <h1>Orders</h1>
                  <h2>2652</h2>
                </td>
                <td>
                  <h1>Seles</h1>
                  <h2>16,273</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h1>Order Value</h1>
                  <h2>12.03%</h2>
                </td>
                <td>
                  <h1>Customers</h1>
                  <h2>21,456</h2>
                </td>
              </tr>
              <tr>
                <td className="border-none">
                  <h1>Income</h1>
                  <h2>$35,652</h2>
                </td>
                <td className="border-none">
                  <h1>Expensess</h1>
                  <h2>$12,248</h2>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="overview-right">
          <h1>Right side</h1>
        </div>
      </div>
    </div>
  );
};

export default OverviewChart;
