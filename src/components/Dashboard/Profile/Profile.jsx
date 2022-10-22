import "./profile.css";
import { BiDotsHorizontal } from "react-icons/bi";
import ProfileChart from "./ProfileChart";
import RecentActivity from "./RecentActivity";

const Profile = () => {
  return (
    <div className="profile">
      <section className="profile-top">
        <img
          src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div className="profile-avatar">
          <img
            src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <span className="profile-icon">
          <BiDotsHorizontal />
        </span>
        <div className="profile-info">
          <h2>Jennifer Bennett</h2>
          <p>Product Designer</p>
        </div>
        <div className="profile-status">
          <div>
            <p className="status-counter">1,269</p>
            <p>Products</p>
          </div>
          <hr />
          <div>
            <p className="status-counter">5.2k</p>
            <p>Followers</p>
          </div>
        </div>
      </section>
      <hr />
      <ProfileChart />
      <hr />
      <RecentActivity />
    </div>
  );
};

export default Profile;
