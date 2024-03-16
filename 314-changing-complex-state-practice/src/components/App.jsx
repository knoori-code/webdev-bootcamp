import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleFName(event) {

  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleFName} />
        <input name="lName" placeholder="Last Name" onChange={handleFName} />
        <input name="email" placeholder="Email" onChange={handleFName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
