import React from "react";

function ToDoItem(props) {

  function handleClick() {

  }

  return (
    <li
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
