import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  let day = date.getDay(); // Gives integer between 0 and 6 (Sunday to Saturday)

  let type = "a weekday";
  let adv = "time to work hard!";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "time to have fun!";
  }

  res.render("index.ejs", { dayType: type, advice: adv });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
