const express = require("express");
const app = express();
const port = 3005;
const { pokemon } = require("./models/pokemon");

app.get("/", (req, res) => {
  res.send("Welcome to the pokemon app!");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
