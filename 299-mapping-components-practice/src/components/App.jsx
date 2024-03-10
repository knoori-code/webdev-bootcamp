import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  const entryArray = emojipedia.map((emoji) => {
    return (
      <Entry
        key={emoji.id}
        name={emoji.name}
        meaning={emoji.meaning}
        emoji={emoji.emoji}
      />
    );
  });

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {entryArray}
      </dl>
    </div>
  );
}

export default App;
