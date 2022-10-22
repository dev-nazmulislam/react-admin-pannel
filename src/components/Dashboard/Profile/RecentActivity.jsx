import "./recentActivity.css";

const activities = [
  {
    date: "12 Sep",
    message: "Responded to need 'Volunteer activities'",
  },
  {
    date: "12 Sep",
    message: "Responded to need 'Volunteer activities'",
  },
  {
    date: "10 Sep",
    message: "Responded to need 'Volunteer activities'",
  },
  {
    date: "09 Sep",
    message: "Responded to need 'Volunteer activities'",
  },
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h1>Recent Activity</h1>
      {activities.map((activity) => (
        <div className="activity-item">
          <div className="activity-date">{activity.date}</div>
          <p className="activity-message">{activity.message}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
