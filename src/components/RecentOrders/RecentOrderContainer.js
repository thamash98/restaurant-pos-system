import React from 'react'
import Style from './RecentOrderContainer.module.css';
import RecentOrderRecord from './RecentOrderRecord';

const RecentOrderContainer = () => {
  return (
    <div className={Style.outer}>
      <span className={Style.title} >RECENT ORDERS</span>
      <RecentOrderRecord orderId='#O-1026' status='IN-PROGRESS' color= '#3498db'/>
      <RecentOrderRecord orderId='#O-1027' status='CANCELED' color='#C0392B'/>
      <RecentOrderRecord orderId='#O-1028' status='DONE' color='#27AE60'/>
      <RecentOrderRecord orderId='#O-1029' status='DONE' color='#27AE60'/>
      <RecentOrderRecord orderId='#O-1030' status='IN-PROGRESS' color='#3498db'/>
      <RecentOrderRecord orderId='#O-1031' status='CANCELED' color='#C0392B'/>
    </div>
  );
}

export default RecentOrderContainer;