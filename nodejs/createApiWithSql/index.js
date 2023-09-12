const express = require("express");
const con = require('./config');
const app = express();

app.get("/", (req, res) => {
  con.query("SELECT * FROM students", (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error querying the database" });
    } else {
      if (result.length === 0) {
        res.json({ message: "No users found" });
      } else {
        res.json(result);
      }
    }
  });
});

const PORT=5000
app.listen(PORT, () => {
  console.log("Server: ", `http://localhost:${PORT}`);
});
