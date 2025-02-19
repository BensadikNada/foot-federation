import React from "react";
import '../../Styles/Stats.css';

const Stats = () => {
  const statsData = [
    { label: "Direct goal involvement", value: 196 },
    { label: "Minutes per goal involvement", value: 68 },
    { label: "Goals", value: 128 },
    { label: "Minutes per goals", value: 104 },
    { label: "Shots", value: 789 },
    { label: "Shots on target", value: 364 },
    { label: "Shooting accuracy", value: "46.1%" },
    { label: "Goal conversion ratio", value: "16.2%" },
    { label: "Assists", value: 68 },
    { label: "Chances created", value: 399 },
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`stat-item ${index === 4 ? "highlighted" : ""}`}
        >
          <span className="stat-label">{stat.label}</span>
          <span className="stat-value">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;