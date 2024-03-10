import React from "react";
import Login from "./Login"

const isLoggedIn = true;

function renderConditionally() {
  if (isLoggedIn === true) return <h1>Hello</h1>;
  return (
    <Login />
  );
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
