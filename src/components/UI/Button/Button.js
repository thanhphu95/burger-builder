import React from 'react';
import classes from  './Button.css';
const customButon = props => {
  const { btn, btnType, clicked } = props;
  return (
    <button
      className={[classes.Button, classes[btnType]].join(' ').toString()}
      onClick={() => {
        clicked();
      }}
    >
      {props.children}
    </button>
  );
};
export default customButon;
