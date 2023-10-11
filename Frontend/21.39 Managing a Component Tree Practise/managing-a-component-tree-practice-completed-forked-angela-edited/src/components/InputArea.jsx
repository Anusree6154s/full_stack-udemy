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
