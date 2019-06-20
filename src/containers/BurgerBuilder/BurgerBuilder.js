import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Buger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 0,
      isPurchased: false,
      purchasing: false
    };
  }
  addIngredients = type => {
    const ingredientCount = this.state.ingredients[type] + 1;
    const totalPrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
    this.setState(
      {
        ...this.state,
        ingredients: {
          ...this.state.ingredients,
          [type]: ingredientCount
        },
        totalPrice
      },
      () => {
        this.updatePurchase();
      }
    );
  };

  removeIngredients = type => {
    const ingredientCount =
      this.state.ingredients[type] > 0
        ? this.state.ingredients[type] - 1
        : this.state.ingredients[type];
    const totalPrice =
      this.state.ingredients[type] === 0
        ? this.state.totalPrice
        : this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState(
      {
        ...this.state,
        ingredients: {
          ...this.state.ingredients,
          [type]: ingredientCount
        },
        totalPrice
      },
      () => {
        this.updatePurchase();
      }
    );
  };

  updatePurchase = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(idx => {
        return ingredients[idx];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ isPurchased: sum > 0 });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchaseHanlder = () => {
    this.setState({ purchasing: false });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          cancelPurchaseHanlder={this.cancelPurchaseHanlder}
        >
          <Backdrop />
          <OrderSummary
            cancelPurchaseHanlder={this.cancelPurchaseHanlder}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Buger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredients}
          removeIngredients={this.removeIngredients}
          price={this.state.totalPrice}
          disabledInfo={disabledInfo}
          isPurchased={this.state.isPurchased}
          order={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
