import React from 'react';
import Style from './MainLogo.module.css';
import logo from '../../assests/main-logo.png';

const MainLogo = () => {
  return (
    <div className={Style.outerLogo}>
        <img className= {Style.image} src={logo} />
    </div>
  );
}

export default MainLogo;