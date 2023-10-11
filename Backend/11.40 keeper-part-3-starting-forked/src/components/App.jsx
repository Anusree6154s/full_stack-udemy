import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, addItem] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      <Note
        key={1}
        title="Note title"
        content="Note content"
        items={items}
        addItem={addItem}
      />
      <Footer />
    </div>
  );
}

export default App;
