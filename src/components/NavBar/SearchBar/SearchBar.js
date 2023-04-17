import React from 'react';
import searchIcon from '../../../assests/search.png';
import Style from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={Style.outer}>
        <img className={Style.image} src={searchIcon} />
        <input className={Style.input} type='text' placeholder='search'/>
    </div>
  );
}

export default SearchBar;