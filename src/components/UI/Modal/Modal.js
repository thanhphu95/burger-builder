import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  const { show, cancelPurchaseHanlder } = props;
  const style = {
    transform: show ? 'translate(0)' : 'translate(-100vh)',
    opacity: show ? '1' : '0'
  };
  return (
    <Aux>
      <Backdrop show={show} cancelPurchaseHanlder={cancelPurchaseHanlder} />
      <div style={style} className={classes.Modal}>
        {props.children}
      </div>
    </Aux>
  );
};
export default modal;
