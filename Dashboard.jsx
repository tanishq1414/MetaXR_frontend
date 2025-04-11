const Dashboard = () => {
    const metrics = [
      { title: "Heart Rate", icon: "❤️", value: "72 bpm", trend: "▼ 3%", isUp: false },
      { title: "Sleep Quality", icon: "😴", value: "85%", trend: "▲ 7%", isUp: true },
      { title: "Stress Level", icon: "😌", value: "Low", trend: "▼ 12%", isUp: false },
      { title: "Activity Score", icon: "🏃", value: "68/100", trend: "▲ 5%", isUp: true }
    ];
  
    return (
      <section id="dashboard" className="dashboard-section">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Your Health Dashboard</h2>
          <div className="dashboard-controls">
            <button className="control-btn">Daily</button>
            <button className="control-btn">Weekly</button>
            <button className="control-btn">Monthly</button>
          </div>
        </div>
        <div className="dashboard-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-header">
                <span className="metric-title">{metric.title}</span>
                <span className="metric-icon">{metric.icon}</span>
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-trend ${metric.isUp ? 'trend-up' : 'trend-down'}`}>
                <span>{metric.trend}</span> from last week
              </div>
            </div>
          ))}
          <div className="chart-container">
            <img src="/placeholder/800/300" alt="Health Metrics Chart" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Dashboard;