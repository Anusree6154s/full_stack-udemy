import React from "react";
import ReactDOM from "react-dom";
import * as opr from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{opr.add(1, 2)}</li>
    <li>{opr.multiply(2, 3)}</li>
    <li>{opr.subtract(7, 2)}</li>
    <li>{opr.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
