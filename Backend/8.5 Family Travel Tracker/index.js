import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "khalidnoori",
  host: "localhost",
  database: "world",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getUsers() {
  let users = []
  const usersResult = await db.query("SELECT * FROM users;");
  usersResult.rows.forEach(user => users.push(user));
  return users;
}

async function getColor() {
  const colorResult = await db.query("SELECT color FROM users WHERE id = $1;", [currentUserId]);
  const color = colorResult.rows[0].color;
  return color;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const color = await getColor();
  const users = await getUsers();
  console.log(currentUserId)
  console.log(color)
  console.log(countries)

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: color,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    console.log(countryCode)
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2);",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err)
  }
});
app.post("/user", async (req, res) => {
  const newValue = req.body.add;
  if (newValue) {
    return res.render(`${newValue}.ejs`);
  }

  currentUserId = parseInt(req.body.user);
  return res.redirect("/");
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
