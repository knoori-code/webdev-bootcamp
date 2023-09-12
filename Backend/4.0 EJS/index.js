import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const day = new Date();
  console.log(day);
  res.render("index.ejs", {})
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
