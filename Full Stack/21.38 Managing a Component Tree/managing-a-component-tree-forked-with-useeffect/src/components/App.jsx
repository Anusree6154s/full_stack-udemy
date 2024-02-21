import React, { useState, useEffect } from "react";
import Item from "./Item";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, { text: inputText, tobeDeleted: false }];
    });
    setInputText("");
  }
  function handleClick(id) {
    const copy = [...items];
    copy[id].tobeDeleted = true;
    setItems(copy);
    //we use the filter function to filter out array elements of the usestate variable items with index=id
  }
  //useffect hook is used to handdle any after effects you might want your app to do other than the main event.
  //Here, our main event is inline style, after that we want the element to be deleted apart from the effect.
  //deleteItem(id) causes the inline styling, but that style change causes the usestate array 'items' to get modified...
  //items is declared as a dependency of the useEffect hook, so if there is any change in the itemsarray, useEffect is called automatically.
  //in useeffect, we are deleting those elements whose tobedeleted prop is true, by calling the handledelete(id) declared inside usestate only
  //NOTE: don't put handledelete() outside! this causes the code to go outside the useEffect, change itemsarray, which again causes useeffect to run ...infinite loop

  useEffect(
    () => {
      function handleDelete(id) {
        const newitems = items.filter((element, index) => {
          return index !== id;
        });
        setItems(newitems);
      }
      items.forEach((element, index) => {
        if (element.tobeDeleted) {
          setTimeout(() => {
            handleDelete(index);
          }, 1000);
        }
      });
    },
    [
      items
    ] /*here we specify all the dependecies required by useeffect to run properly */
  );
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
            <Item
              key={index}
              id={index}
              text={todoItem.text}
              flag={todoItem.tobeDeleted}
              onChecked={handleClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
