import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  let day = date.getDay();
  let dayType = "";
  let advice = "";

  if (day === 0 || day === 6) {
    dayType = "It's the weekend, ";
    advice = "it's time to have fun!";
  } else {
    dayType = "It's a weekday, ";
    advice = "time to work hard!";
  }

  res.render("index.ejs", { dayType: dayType, advice: advice });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
