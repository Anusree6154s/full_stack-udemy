import React, { useState } from "react";

function CreateArea(props) {
  const [text, changeText] = useState({
    title: "",
    content: ""
  });

  function changeValue(event) {
    const { name, value } = event.target;
    changeText((prevText) => ({
      ...prevText,
      [name]: value
    }));
    console.log("event.target.name: " + event.target.name);
    console.log("event.target.value: " + event.target.value);
  }

  function addText() {
    props.addItem((prevItems) => [...prevItems, text]);
    changeText({ title: "", content: "" }); // Clear the input fields after adding
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={changeValue}
          value={text.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={changeValue}
          value={text.content}
        />
        <button type="button" onClick={addText}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
