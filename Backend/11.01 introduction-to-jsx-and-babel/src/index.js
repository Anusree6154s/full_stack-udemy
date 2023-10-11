import React from "react";
import ReactDOM from "react-dom";

//.render renders only one element
ReactDOM.render(<h1>Hello</h1>, document.getElementById("root")); //h =1 is rendered
ReactDOM.render(
  <div>
    <h1>Hello</h1>
    <p>This is a para</p>
  </div>,
  document.getElementById("root2")
); //here div is rendered
