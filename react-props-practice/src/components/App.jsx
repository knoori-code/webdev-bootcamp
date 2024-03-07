import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const cardArray = contacts.map((obj) => {
    return (
      <Card
        name={obj.name}
        img={obj.imgURL}
        tel={obj.phone}
        email={obj.email}
      />
    );
  });

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {cardArray}
    </div>
  );
}

export default App;
