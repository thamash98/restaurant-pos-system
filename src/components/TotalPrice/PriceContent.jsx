import React from 'react';
import Style from './PriceContent.module.css'

const PriceContent = (props) => {
  return (
    <div className={Style.container}>
        <span style={{fontWeight : props.fontWeight, fontSize: props.size}} className={Style.mainTitle}>{props.mainTitle}</span>
        <span className={Style.subTitle}>{props.subTitle}</span>
    </div>
  );
}

export default PriceContent;