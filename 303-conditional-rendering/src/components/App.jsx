import React from "react";
import { render } from "react-dom";

const isLoggedIn = true;

function renderConditionally() {
  if (isLoggedIn === true) return <h1>Hello</h1>;
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

function App() {
  return <div className="container">{renderConditionally}</div>;
}

export default App;
