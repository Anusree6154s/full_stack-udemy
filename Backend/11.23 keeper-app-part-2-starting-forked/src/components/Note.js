import React from "react";
import notes from "../notes";

function createNotes(data) {
  return (
    <div className="note">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

function Note() {
  return <div>{notes.map(createNotes)}</div>;
}

export default Note;
