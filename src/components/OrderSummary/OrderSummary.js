import React from 'react';
import Aux from '../../hoc/Aux';
import CustomButon from '../UI/Button/Button';

const orderSummary = props => {
  const { ingredients, cancelPurchaseHanlder, totalPrice } = props;
  const ingredientElement = el => {
    return (
      ingredients[el] > 0 && (
        <li key={el}>
          {el}: {ingredients[el]}
        </li>
      )
    );
  };

  return (
    <Aux>
      <div>Your Order</div>
      <div>A delicious burger with the following ingredients:</div>
      <div>
        <ul>
          {Object.keys(ingredients).map(ingre => ingredientElement(ingre))}
        </ul>
      </div>
      <div>
        Total Price: <strong>{totalPrice.toFixed(2)}</strong>
      </div>
      <div>Countinue to Checkout?</div>
      <CustomButon
        clicked={cancelPurchaseHanlder}
        btn="Button"
        btnType="Danger"
      >
        Cancel
      </CustomButon>
      <CustomButon btn="Button" btnType="Success">
        Countinue
      </CustomButon>
    </Aux>
  );
};
export default orderSummary;
