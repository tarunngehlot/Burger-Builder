import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux1';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) =>{

  let attachedClasses = [classes.Sidedrawer, classes.Close];

  if(props.open){
    attachedClasses=[classes.Sidedrawer, classes.Open];
  }

  return(
    <Aux>
      <Backdrop show={props.open} cancelled={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
