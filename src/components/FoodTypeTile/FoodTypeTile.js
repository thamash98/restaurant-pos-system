import React from 'react'
import Style from './FoodTypeTile.module.css'
import breakfast_image from '../../assests/breakfast.png';

const FoodTypeTile = () => {
  return (
    <div>
        <img src={breakfast_image}></img>
    </div>
  )
}

export default FoodTypeTile