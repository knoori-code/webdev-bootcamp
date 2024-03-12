import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleHover() {
    document.getElementById("btn").style.backgroundColor = "black"
  }

  function handleMouseOut() {
    document.getElementById("btn").style.backgroundColor = "white"
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button id="btn" onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut} >Submit</button>
    </div>
  );
}

export default App;
