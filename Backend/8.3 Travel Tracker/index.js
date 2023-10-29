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
const countries = [];

db.query("SELECT * FROM visited_countries", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    countries = res.rows;
  }

  db.end();
});

app.get("/", async (req, res) => {
  //Write your code here.
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
