import React from 'react';
import classess from './NavigationItems.css';

const navigationItems = props => {
  return (
    <li className={classess.NavigationItems}>
      <a>{props.children}</a>
    </li>
  );
};

export default navigationItems;
