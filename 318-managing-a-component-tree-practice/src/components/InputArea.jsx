import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onType} type="text" value={props.text} />
      <button onClick={props.onButtonClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
