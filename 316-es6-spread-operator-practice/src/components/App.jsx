import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    task: "",
    taskList: [],
  });

  function handleChange(event) {
    const { value } = event.target;

    setState((prev) => {
      return {
        ...prev,
        task: value
      }
    })
  }

  function handleClick() {
    setState((prev) => {
      prev.taskList.push(prev.task);

      return {
        ...prev
      }
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={state.task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {state.taskList.map((item) => {
            return (<li>{item}</li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
