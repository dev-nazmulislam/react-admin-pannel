import "./profileChart.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProfileChart = () => {
  const value = 76;
  return (
    <div className="profileChart-container">
      <div className="top-content">
        <h1>Earnging</h1>
        <AiOutlineQuestionCircle />
      </div>
      <motion.div className="profile-chart" layoutId="expandableCard">
        <div className="radialBar">
          <CircularProgressbar value={value} text={`${value}%`} />
        </div>
        <div className="profile-detail">
          <span>$26,256</span>
          <span>Earning This Month</span>
          <span>
            <span className="profile-button">+2.65%</span> From previous month
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileChart;
