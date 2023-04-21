import React from 'react';
import Style from './PriceContainer.module.css'
import PriceContent from './PriceContent';
import Button from './Button';

const PriceContainer = () => {
  return (
    <div className={Style.container}>
        <PriceContent size={'1.2rem'} fontWeight={700} mainTitle={'Sub Total'} subTitle={'Rs. 6400.00'}/>
        <PriceContent size={'1rem'} fontWeight={300} mainTitle={'Tax 10%'} subTitle={'Rs. 640.00'}/>
        <span className={Style.total}>Total Payment</span>
        <Button type='button'>Rs. 9500.00</Button>
    </div>
  );
}

export default PriceContainer;