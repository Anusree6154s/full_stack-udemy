import React from "react";
import Login from "./Login";

const isLoggedIn = false;
function App() {
  return isLoggedIn === true ? <h1>Hello</h1> : <Login />;
}

export default App;
