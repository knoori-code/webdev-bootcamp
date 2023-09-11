import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  let generatedName = req.body.street + req.body.pet;
  res.send(`<h1>Your band name is:</><h2>${generatedName}</>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
