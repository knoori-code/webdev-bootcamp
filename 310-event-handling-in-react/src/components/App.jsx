import React from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello")

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
