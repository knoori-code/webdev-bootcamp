//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile()  
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
