import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  //to change the value of input element onChange
  const [inputText, setInputText] = useState("");

  //to add the changed value of input element in items array
  const [items, setItems] = useState([]);

  //to change value in input onChange
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue); //change value
  }

  //to add a new item to items array onCLick
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText]; //add item
    });
    setInputText("");
  }

  //to delete an item by id onChecked
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        //create an array of all items with their index
        return index !== id; //of only the ones that dont match the id
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              // key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
