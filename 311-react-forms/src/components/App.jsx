import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("")

  function handleClick() {
    setName(input)
  }

  function handleChange(event) {
    setInput(event.target.value)
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange} value={input}/>
      <button onClick={handleClick} >Submit</button>
    </div>
  );
}

export default App;
