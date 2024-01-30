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

app.get("/", async (req, res) => {
  //Write your code here.

  try {
    let countryArray = [];
    const result = await db.query("SELECT * FROM countries");
    console.log(result.rows);

    result.forEach((country) => {
      countryArray.push(country.country_code);
    });

    res.render("index.ejs", { countries: countryArray });
  } catch (error) {
    console.error("Error executing query", err.stack);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
