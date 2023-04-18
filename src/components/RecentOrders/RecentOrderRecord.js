import React from 'react'
import Style from './RecentOrderRecord.module.css'

const RecentOrderRecord = (props) => {
  return (
    <div className={Style.recordOuter}>
        <span className={Style.orderId}>{props.orderId} </span>
        <span style ={{backgroundColor:props.color}} className={Style.status}>{props.status}</span>
    </div>
  );
}

export default RecentOrderRecord