import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../Logo/Logo';
import Navigation from '../../../Navigation/Navigation';

const toolBar = props => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <div className={classes.destopOnly}>
        <Navigation />
      </div>
    </header>
  );
};

export default toolBar;
