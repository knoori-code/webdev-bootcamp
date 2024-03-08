import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const cardArray = contacts.map((contactObj) => {
    return (
      <Card
        name={contactObj.name}
        img={contactObj.imgURL}
        tel={contactObj.phone}
        email={contactObj.email}
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
