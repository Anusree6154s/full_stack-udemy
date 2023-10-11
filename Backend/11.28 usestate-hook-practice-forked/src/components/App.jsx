import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  setInterval(getNewTime, 1000);

  const [time, setTime] = useState(now);

  function getNewTime() {
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getNewTime}>Get Time</button>
    </div>
  );
}

export default App;
