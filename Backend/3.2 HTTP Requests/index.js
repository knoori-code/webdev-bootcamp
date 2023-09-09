import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</>");
});

app.get("/contacts", (req, res) => {
  res.send("<h1>This is the contacts page</>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is the about page</>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
