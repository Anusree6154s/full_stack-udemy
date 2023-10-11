import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(data) {
  return <Card emoji={data.emoji} title={data.name} text={data.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
