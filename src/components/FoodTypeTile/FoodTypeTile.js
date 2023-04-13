import React,{useState} from 'react';
import Style from './FoodTypeTile.module.css';

const FoodTypeTile = (props) => {

  const [mouseState, setMouseEntered]= useState(false); //useState Hook

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
         style={{backgroundColor: !mouseState? props.defColor: props.onColor}}
    >
        <img src={props.imgSource}></img>
        <div className={Style.titleHolder}>
          <span className={Style.mainTitle}>{props.heading}</span>
          <span className={Style.subTitle}>13 Items</span>
        </div>
    </div>
  )
}

export default FoodTypeTile