import React,{useState} from 'react';
import Style from './FoodTypeTile.module.css';
import breakfast_image from '../../assests/breakfast.png';

const FoodTypeTile = () => {

  const [mouseState, setMouseEntered]= useState(false);

  const mouseEnterHandler = ()=>{
      setMouseEntered(true);
  }
  const mouseLeaveHandler= ()=>{
      setMouseEntered(false);
  }

  return (
    <div className={Style.outer} 
         onMouseEnter={mouseEnterHandler}
         onMouseLeave={mouseLeaveHandler}
         style={{backgroundColor: !mouseState? "#B4FFF6":"#3a6d67"}}
    >
        <img src={breakfast_image}></img>
        <div className={Style.titleHolder}>
          <span className={Style.mainTitle}>Breakfast</span>
          <span className={Style.subTitle}>13 Items</span>
        </div>
    </div>
  )
}

export default FoodTypeTile