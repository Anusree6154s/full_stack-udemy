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
