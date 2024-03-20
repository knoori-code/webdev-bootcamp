import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prev) => {
      return prev ? false : true;
    });
  }

  return (
    <li
      style={{ textDecoration: isClicked ? "line-through" : null }}
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
