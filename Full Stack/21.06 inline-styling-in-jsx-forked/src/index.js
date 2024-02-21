import React from "react";
import ReactDOM from "react-dom";

const style = { color: "red" };

// ReactDOM.render(<h1 style={{color: "red"}}>Hello World!</h1>, document.getElementById("root"));
ReactDOM.render(
  <h1 style={style}>Hello World!</h1>,
  document.getElementById("root")
);
