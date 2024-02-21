import React, { useState } from "react";

function App() {
  // //one way
  // const [fName, setlName] = useState("");
  // const [lName, setfName] = useState("");
  // function handleChangef(event) {
  //   setlName(event.target.value);
  // }
  // function handleChangel(event) {
  //   setfName(event.target.value);
  // }
  // return (
  //   <div className="container">
  //     <h1>
  //       Hello {fName} {lName}
  //     </h1>
  //     <form>
  //       <input
  //         name="fName"
  //         placeholder="First Name"
  //         onChange={handleChangef}
  //         value={fName}
  //       />
  //       <input
  //         name="lName"
  //         placeholder="Last Name"
  //         onChange={handleChangel}
  //         value={lName}
  //       />
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // );

  // //second way
  // const [fullName, setFullName] = useState({ fName: "", lName: "" });
  // function handleChange(event) { //using single function
  //   const newName = event.target.value;
  //   const inputName = event.target.name;

  //   setFullName((existingData) => {
  //     if (inputName === "fName") {
  //       return { fName: newName, lName: existingData.lName };
  //     } else {
  //       return { lName: newName, fName: existingData.fName };
  //     }
  //   });
  // }
  // return (
  //   <div className="container">
  //     <h1>
  //       Hello {fullName.fName} {fullName.lName}
  //     </h1>
  //     <form>
  //       <input
  //         name="fName"
  //         placeholder="First Name"
  //         onChange={handleChange}
  //         value={fullName.fName}
  //       />
  //       <input
  //         name="lName"
  //         placeholder="Last Name"
  //         onChange={handleChange}
  //         value={fullName.lName}
  //       />
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // );

  //second way
  const [fullName, setFullName] = useState({ fName: "", lName: "" });
  function handleChange(event) {
    const { name, value } = event.target; //destructuring event.target
    const newName = name;
    const inputName = value;

    setFullName((existingData) => {
      if (inputName === "fName") {
        return { fName: newName, lName: existingData.lName };
      } else {
        return { lName: newName, fName: existingData.fName };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
