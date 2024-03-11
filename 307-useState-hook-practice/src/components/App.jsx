import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={() => setTime(new Date().toLocaleTimeString())}>
        Get Time
      </button>
    </div>
  );
}

export default App;
