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

async function checkVisited() {
  let countries = [];
  const result = await db.query("SELECT country_code FROM visited_countries");
  countries = result.rows;
  console.log("countries visited: ", countries);

  const countryArray = [];
  countries.forEach((country) => countryArray.push(country.country_code));

  return countryArray;
}

app.get("/", async (req, res) => {
  const countryArray = await checkVisited();

  res.render("index.ejs", {
    total: countryArray.length,
    countries: countryArray,
  });
});

app.post("/add", async (req, res) => {
  const countryName = req.body.country;

  let result;
  let countryCode;
  try {
    result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [countryName.toLowerCase()]
    );

    const countryCodeObject = result.rows[0];
    countryCode = countryCodeObject.country_code;
  } catch (error) {
    console.log(error);
    console.log("Rendering with error");
    const countryArray = await checkVisited();
    res.render("index.ejs", {
      total: countryArray.length,
      countries: countryArray,
      error: "Country name does not exist. Please try again",
    });
    return;
  }

  try {
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    const countryArray = await checkVisited();
    res.render("index.ejs", {
      total: countryArray.length,
      countries: countryArray,
      error: "Country name already exists. Please try again",
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
