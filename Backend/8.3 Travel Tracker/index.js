import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "khalidnoori",
  host: "localhost",
  database: "world",
  port: "5432",
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const visitedCountries = async () => {
  
  let countryArray = [];
  const result = await db.query("SELECT * FROM visited_countries;");
  console.log(result.rows);
  
  result.rows.forEach((country) => {
    countryArray.push(country.country_code);
  });

  return countryArray;

}

app.get("/", async (req, res) => {
  //Write your code here.
  const countryArray = await visitedCountries();
  res.render("index.ejs", { countries: countryArray, total: countryArray.length });

});

app.post("/add", async (req, res) => {
  
  try {
    const country = req.body.country.toLowerCase().trim();
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) = $1;", [country]); // convert country_name column to lowercase
    const countryCode = result.rows[0].country_code;

    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
      res.redirect("/")
    } catch (err) {
      console.error("The country has already been visited. Try again.", err.stack);
    }

  } catch (err) {
    console.error("Country name does not exist. Try again.", err.stack);
    const countryArray = await visitedCountries();
    res.render("index.ejs", { countries: countryArray, total: countryArray.length, error: "Country name does not exist. Try again." });
  }

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
