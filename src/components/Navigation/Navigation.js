import React from 'react';
import classes from './Navigation.css';
import NavigationItems from './NavigationItems/NavigationItems';
const navigation = props => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItems>Bugur Builder</NavigationItems>
      <NavigationItems>Checkout</NavigationItems>
    </ul>
  );
};

export default navigation;
