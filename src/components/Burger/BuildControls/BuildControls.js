import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = props => {
  const controlLabels = [
    {
      label: 'Salad',
      type: 'salad'
    },
    {
      label: 'Bacon',
      type: 'bacon'
    },
    {
      label: 'Cheese',
      type: 'cheese'
    },
    {
      label: 'Meat',
      type: 'meat'
    }
  ];

  const {
    price,
    addIngredients,
    removeIngredients,
    isPurchased,
    disabledInfo,
    order
  } = props;
  return (
    <div className={classes.BuildControls}>
      <div>Current price: {price.toFixed(2)}</div>
      {controlLabels.map(crtl => (
        <BuildControl
          key={crtl.label}
          type={crtl.type}
          label={crtl.label}
          addIngredients={addIngredients}
          removeIngredients={removeIngredients}
          price={price}
          isDisabled={disabledInfo[crtl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        onClick={() => {
          order();
        }}
        disabled={!isPurchased}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
