import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "khalidnoori",
  host: "localhost",
  database: "world",
  port: 5432,
});

db.connect();
let countries = [];
let numberVisited = 0;

db.query("SELECT country_code FROM visited_countries",async (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    countries = res.rows;
  }

  db.end();
});

app.get("/", async (req, res) => {
  console.log("countries visited: ", countries);
  numberVisited = countries.length;

  //Write your code here.
  const countryArray = [];
  countries.forEach((country) => countryArray.push(country.country_code));

  res.render("index.ejs", {
    total: numberVisited,
    countries: countryArray,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
