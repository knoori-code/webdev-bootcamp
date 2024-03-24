import React from "react";

function CreateArea() {

  function handleChange(event) {
    const { name, value } = event.target;
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
