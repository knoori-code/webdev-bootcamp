import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let combinedName = "";

function name(req, res, next) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  combinedName = firstName + lastName;
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(name);

app.get("/", (req, res) => {
  let msg = "Enter your name below";
  res.render("index.ejs", { message: msg });
});

app.post("/submit", (req, res) => {
  const fullNameLength = combinedName.length;
  let msg;
  
  if (fullNameLength !== 0) {
    msg = `There are ${fullNameLength} letters in your name`;
  } else {
    msg = "Please enter a valid name";
  }

  res.render("index.ejs", { message: msg });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
