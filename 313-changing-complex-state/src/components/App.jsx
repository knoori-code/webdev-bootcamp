import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState(""); 

  function handleChange(event) {
    setFirstName(event.target.value)
  }

  function handleSecondChange(event) {
    setSecondName(event.target.value)
  }

  return (
    <div className="container">
      <h1>Hello {firstName} {secondName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleSecondChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
