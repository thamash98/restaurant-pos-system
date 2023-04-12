import React from 'react'
import Style from './FoodTypeTile.module.css'
import breakfast_image from '../../assests/breakfast.png';

const FoodTypeTile = () => {
  return (
    <div className={Style.outer}>
        <img src={breakfast_image}></img>
        <span className={Style.mainTitle}>Breakfast</span>
        <span>13 Items</span>
    </div>
  )
}

export default FoodTypeTile