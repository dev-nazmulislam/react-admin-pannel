import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import NavItem from "../Navbar/NavItem";
import { FcCollapse } from "react-icons/fc";
import "./overviewChart.css";
import { CSSTransition } from "react-transition-group";

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
      <div className="overview-main">Main</div>
    </div>
  );
};

export default OverviewChart;
