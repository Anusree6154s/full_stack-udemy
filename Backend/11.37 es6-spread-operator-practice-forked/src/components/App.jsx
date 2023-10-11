import React, { useState } from "react";

function App() {
  const [InputValue, changeInputValue] = useState("");
  const [Tasks, addNewTask] = useState([]);

  function changeValue(event) {
    changeInputValue(event.target.value); //change InputValue to new value
  }

  function addTask() {
    addNewTask((Tasks) => [...Tasks, InputValue]); //add changed input value to task array
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeValue} value={InputValue} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Tasks.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
