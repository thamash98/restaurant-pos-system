import React from 'react';
import Style from './CartItems.module.css';

const CartItems = () => {
  return (
    <div className={Style.container}>
        <div className={Style.itemCount}>
            <span>12</span>
        </div>
        <div className={Style.titleHolder}>
            <span className={Style.mainTitle}>Roast Chicken(L)</span>
            <span className={Style.priceTitle}>5400.00</span>
        </div>
    </div>
  );
}

export default CartItems;