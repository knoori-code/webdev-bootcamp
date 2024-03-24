import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const { notes, setNotes } = useState([]);

  function addNote() {

  }

  return (
    <div>
      <Header />
      <CreateArea />T
      <Note key={1} title="Note title" content="Note content" onAdd={addNote} />
      <Footer />
    </div>
  );
}

export default App;
