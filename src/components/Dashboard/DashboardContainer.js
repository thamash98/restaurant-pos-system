import React from 'react';
import Style from './DashboardContainer.module.css';

const DashboardContainer = () => {
  return (
    <div className={Style.outer}>
      <span className={Style.dashboardText}>Dashboard</span>
      <div className={Style.dashboardContent}>
        <span>Orders</span>
        <span>Tables</span>
      </div>
    </div>
  );
}

export default DashboardContainer;