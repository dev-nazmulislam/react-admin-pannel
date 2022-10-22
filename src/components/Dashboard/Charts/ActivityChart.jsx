import "./charts.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ActivityChart = () => {
  const value = 70;
  return (
    <div className="chart">
      <div className="top-content">
        <h1>User Activity</h1>
        <AiOutlineQuestionCircle />
      </div>
      <motion.div className="profile-chart" layoutId="expandableCard">
        <div className="radialBar">
          <CircularProgressbar value={value} text={`${value}%`} />
        </div>
        <div className="profile-detail"></div>
      </motion.div>
    </div>
  );
};

export default ActivityChart;
