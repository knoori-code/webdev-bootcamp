import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  const entryArray = emojipedia.map(() => {
    <Entry />
  })

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      </dl>
    </div>
  );
}

export default App;
