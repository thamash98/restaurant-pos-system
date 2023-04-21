import React from 'react';
import Style from './CartItemContainer.module.css';
import CartItem from './CartItems';

const CartItemContainer = () => {
  return (
    <div className={Style.container}>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </div>
  );
}

export default CartItemContainer;