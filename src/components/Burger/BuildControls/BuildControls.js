import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = props => {
  return (
    <div className="BuildControls">
      <BuildControl />
    </div>
  );
};

export default buildControls;
