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

app.get("/", async (req, res) => {
  let countries = [];
  const result = await db.query("SELECT country_code FROM visited_countries")
  countries = result.rows;
  
  console.log("countries visited: ", countries);
  let numberVisited = countries.length;
  
  //Write your code here.
  const countryArray = [];
  countries.forEach((country) => countryArray.push(country.country_code));
  
  res.render("index.ejs", {
    total: numberVisited,
    countries: countryArray,
  });
});

app.post("/add", async (req, res) => {
  const countryName = req.body.country;
  const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [countryName]);
  const countryCodeArray = result.rows; 
  console.log(countryCodeArray)

  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCodeArray[0].country_code]);
  res.redirect("/")

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
