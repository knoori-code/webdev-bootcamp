import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
