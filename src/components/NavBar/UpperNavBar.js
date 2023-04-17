import React from 'react'
import Style from './UpperNavBar.module.css'
import MainLogo from './MainLogo'
import SearchBar from './SearchBar/SearchBar'

const UpperNavBar = () => {
  return (
    <div className={Style.container}>
        <MainLogo/>
        <SearchBar/>
    </div>
  );
}

export default UpperNavBar