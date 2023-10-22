import React from "react";
import ReactDOM from "react-dom";

// Define variables
const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1> {/*statement*/}
    <p>Your lucky number is: {num} </p>
    <p>Your lucky number is: {4 + 6} </p> {/*expression*/}
    <p>Your name is {fName + " " + lName} </p>
    <p>Your name is {`${fName} ${lName}`} </p>
  </div>,
  document.getElementById("root")
);
