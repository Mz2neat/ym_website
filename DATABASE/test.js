// test.js
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: "postgres://postgres:Arahman55@localhost:5432/YM Database",
});

pool.query("INSERT INTO people (full_name, email, region, consent_at) VALUES ($1,$2,$3,now())",
  ["Test Person", "test@example.com", "Ontario"])
  .then(() => console.log("✅ It worked — check pgAdmin"))
  .catch(err => console.error("❌", err.message))
  .finally(() => pool.end());