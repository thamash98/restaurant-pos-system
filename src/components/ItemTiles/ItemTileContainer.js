import React from 'react'
import Style from './ItemTileContainer.module.css'
import SingleItem from './SingleItem';

const ItemTileContainer = () => {
  return (
    <div className={Style.itemContainer}>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
    </div>
  );
}

export default ItemTileContainer