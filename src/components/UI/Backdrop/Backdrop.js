import React from 'react';
import classes from './Backdrop.css';

const backdrop = props => {
  return (
    <div>
      {props.show && (
        <div
          className={classes.Backdrop}
          onClick={() => {
            props.cancelPurchaseHanlder();
          }}
        />
      )}
    </div>
  );
};
export default backdrop;
