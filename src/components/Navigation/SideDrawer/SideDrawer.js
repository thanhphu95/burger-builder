import React from 'react';
import Navigation from '../Navigation';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';

const sideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <Navigation />
      </nav>
    </div>
  );
};

export default sideDrawer;
