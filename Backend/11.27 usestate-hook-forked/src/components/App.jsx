import React, { useState } from "react";

function App() {
  // useState() takes in a value of an inital number and a function. like this-> useState(initialCount, function())
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>+</button>
    </div>
  );
}

export default App;
