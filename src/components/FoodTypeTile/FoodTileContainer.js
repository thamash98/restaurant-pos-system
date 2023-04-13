import React from 'react'
import Style from './FoodTileContainer.module.css';
import FoodTypeTile from './FoodTypeTile';

const FoodTileContainer = () => {
  return (
    <div className={Style.foodContainer}>
        <FoodTypeTile/>
        <FoodTypeTile/>
        <FoodTypeTile/>
        <FoodTypeTile/>
        <FoodTypeTile/>
        <FoodTypeTile/>
    </div>
  )
}

export default FoodTileContainer