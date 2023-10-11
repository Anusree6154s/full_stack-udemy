import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeValue(event) {
    const { name, value } = event.target;
    const newName = value;
    const inputName = name;

    setContact((existingData) => {
      if (inputName === "fName") {
        return {
          fName: newName,
          lName: existingData.lName,
          email: existingData.email
        };
      } else if (inputName === "lName") {
        return {
          lName: newName,
          fName: existingData.fName,
          email: existingData.email
        };
      } else {
        return {
          email: newName,
          lName: existingData.lName,
          fName: existingData.fName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={changeValue} />
        <input name="lName" placeholder="Last Name" onChange={changeValue} />
        <input name="email" placeholder="Email" onChange={changeValue} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
