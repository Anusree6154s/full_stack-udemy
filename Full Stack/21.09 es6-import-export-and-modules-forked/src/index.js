import React from "react";
import ReactDOM from "react-dom";

// //either this way
// import pi, {doublePi, triplePi} from "./math.js";
// ReactDOM.render(
//   <ul>
//     <li>{pi}</li>
//     <li>{doublePi()}</li>
//     <li>{triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );

//or this way
import * as num from "./math.js";
ReactDOM.render(
  <ul>
    <li>{num.default}</li>
    <li>{num.doublePi()}</li>
    <li>{num.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
