import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  let day = date.getDay();
  let message = ""

  if (day === 0 || day === 6) {
    message = "Hey!  It's the weekend, it's time to have fun!"
  } else {
    message = "Hey!  It's a weekday, time to work hard!"
  }

  res.render("index.ejs", { message: message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
