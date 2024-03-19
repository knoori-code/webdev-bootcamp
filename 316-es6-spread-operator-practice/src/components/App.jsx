import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    task: "",
    taskList: [],
  });

  function handleChange(event) {
    const { value } = event.target;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
