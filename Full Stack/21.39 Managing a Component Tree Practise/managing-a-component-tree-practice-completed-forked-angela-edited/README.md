# Explanation 
The code you provided is for a simple To-Do List application built with React. It's been refactored to use separate components for better organization. Let's go through each part of the code:

**1. Index.js:**
```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```
- This is the entry point of your React application. It imports the `App` component and renders it to the DOM element with the ID "root."

**2. App Component:**
```jsx
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea setItems={setItems} />
      <ToDoItem items={items} setItems={setItems} />
    </div>
  );
}

export default App;
```
- The `App` component is the main component for your To-Do List application. It manages the state of the To-Do items and contains the heading, `InputArea`, and `ToDoItem`.

**3. InputArea Component:**
```jsx
import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function addItem() {
    props.setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
```
- The `InputArea` component handles the input field for adding new To-Do items.
- It uses the `useState` hook to manage the state of `inputText`, which represents the text in the input field.
- The `addItem` function adds the item to the list by updating the state with the new item and clearing the input field.
- The `handleChange` function updates `inputText` as the user types in the input field.
- The component renders an input field and an "Add" button.

**4. ToDoItem Component:**
```jsx
import React from "react";

function ToDoItem(props) {
  function deleteItem(id) {
    props.setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <ul>
        {props.items.map((todoItem, index) => {
          return (
            <div key={index} onClick={() => deleteItem(index)}>
              <li>{todoItem}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoItem;
```
- The `ToDoItem` component displays the list of To-Do items and allows users to delete items.
- The `deleteItem` function is called when a user clicks on an item to delete it. It updates the state by filtering out the item to be deleted based on its index.
- The component maps through the items, displays them as a list, and provides a click handler for deletion.

The key improvements in this refactoring are the separation of concerns into different components, which makes the code more modular and maintainable. The `App` component manages the state and the overall structure of the app, while the `InputArea` and `ToDoItem` components handle specific functionalities.

# Output
