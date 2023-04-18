import React from 'react'
import Style from './SingleItem.module.css'

const SingleItem = () => {
  return (
    <div className={Style.outer}>
        <span className={Style.time}>15 Minutes</span>
        <div className={Style.titleHolder}>
            <span className={Style.mainTitle}>Roast Chicken</span>
            <span className={Style.subTitle}>Rs. 500.00</span>
        </div>
    </div>
  );
}

export default SingleItem