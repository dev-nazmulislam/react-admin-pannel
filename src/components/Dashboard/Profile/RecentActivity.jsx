import "./recentActivity.css";

const activities = [
  {
    date: "12",
    month: "Sep",
    message: "Responded to need 'Volunteer activities'",
  },
  {
    date: "12",
    month: "Sep",
    message: "Responded to need 'Volunteer activities'",
  },
  {
    date: "10",
    mont: "Sep",
    message: "Responded to need 'Volunteer activities'",
  },
  {
    date: "09",
    month: "Sep",
    message: "Responded to need 'Volunteer activities'",
  },
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h1>Recent Activity</h1>
      {activities.map((activity) => (
        <div className="activity-item">
          <div className="activity">
            <p className="date">{activity.date}</p>
            <p className="month">{activity.month}</p>
          </div>
          <p className="activity-message">{activity.message}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
