import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColour, setButtonColour] = useState("white")

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleHover() {
    setButtonColour("black")
  }

  function handleMouseOut() {
    setButtonColour("white")
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: buttonColour}} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut} >Submit</button>
    </div>
  );
}

export default App;
