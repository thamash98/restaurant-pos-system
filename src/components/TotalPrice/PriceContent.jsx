import React from 'react';
import Style from './PriceContent.module.css'

const PriceContent = () => {
  return (
    <div className={Style.container}>
        <span className={Style.mainTitle}>Sub Total</span>
        <span className={Style.subTitle}>Rs. 7800.00</span>
    </div>
  );
}

export default PriceContent;