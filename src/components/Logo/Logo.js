import React from 'react';
import BurgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={BurgerLogo}/>
  </div>
);

export default logo;
