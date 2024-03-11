import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={() => setCurrentTime(new Date().toLocaleTimeString())}>
        Get Time
      </button>
    </div>
  );
}

export default App;
