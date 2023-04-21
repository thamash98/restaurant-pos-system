import React from 'react';
import Style from './PriceContainer.module.css'
import PriceContent from './PriceContent';
import Button from './Button';

const PriceContainer = () => {
  return (
    <div className={Style.container}>
        <PriceContent/>
        <span className={Style.total}>Total Payment</span>
        <Button/>
    </div>
  );
}

export default PriceContainer;