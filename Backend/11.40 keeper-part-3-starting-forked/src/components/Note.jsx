import React from "react";

function Note(props) {
  function deleteItem(index) {
    const filteredItems = props.items.filter((item, id) => id !== index);
    props.addItem(filteredItems);
  }

  console.log("props.items: ", props.items); // Log the items array

  return (
    <div>
      {props.items.map((item, index) => (
        <div className="note" key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <button onClick={() => deleteItem(index)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default Note;
