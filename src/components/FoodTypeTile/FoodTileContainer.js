import React from 'react'
import Style from './FoodTileContainer.module.css';
import FoodTypeTile from './FoodTypeTile';
import breakfast_image from '../../assests/breakfast.png';
import lunch_image from '../../assests/lunch.png';
import dinner_image from '../../assests/dinner.png';
import drinks_image from '../../assests/drink.png';
import dessert_image from '../../assests/dessert.png';
import soup_image from '../../assests/soup.png';

const FoodTileContainer = () => {
  return (
    <div className={Style.foodContainer}>
        <FoodTypeTile imgSource ={breakfast_image} heading="Breakfast" defColor='#B4FFF6' onColor='#3a6d67'/>
        <FoodTypeTile imgSource ={lunch_image} heading="Lunch" defColor='#A4FFB8' onColor='#3a6d67'/>
        <FoodTypeTile imgSource ={dinner_image} heading="Dinner" defColor='#FFF6A4' onColor='#3a6d67'/>
        <FoodTypeTile imgSource ={drinks_image} heading="Drinks" defColor='#9BB7FF' onColor='#3a6d67'/>
        <FoodTypeTile imgSource ={dessert_image} heading="Desserts" defColor='#FFB4B4' onColor='#3a6d67'/>
        <FoodTypeTile imgSource ={soup_image} heading="Soup" defColor='#FC7CFF' onColor='#3a6d67'/>
    </div>
  )
}

export default FoodTileContainer