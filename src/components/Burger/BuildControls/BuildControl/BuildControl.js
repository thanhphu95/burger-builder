import React from "react";
import classes from  "./BuildControl.css";

const buildControl = props => {
  const { isDisabled, label, type, addIngredients, removeIngredients } = props;
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        disabled={isDisabled}
        onClick={() => {
          removeIngredients(type);
        }}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={() => {
          addIngredients(type);
        }}
      >
        More
      </button>
    </div>
  );
};
export default buildControl;
