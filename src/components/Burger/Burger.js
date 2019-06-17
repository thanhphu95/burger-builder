import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const buger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(val => {
      return [...Array(props.ingredients[val])].map((__, idx) => {
        return <BurgerIngredient key={idx + val} type={val} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  const addIngredients = <p>Please start adding ingredients</p>;
  transformedIngredients =
    transformedIngredients.length > 0 ? transformedIngredients : addIngredients;
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default buger;
