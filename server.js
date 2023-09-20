const express = require("express");
const jsxViewEngine = require("jsx-view-engine");
const { pokemon } = require("./models/pokemon");

const app = express();
const port = 3005;

app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the pokemon app!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});

app.get("/pokemon/:id", (req, res) => {
    res.send(req.params.id);
  });

app.listen(port, () => {
  console.log("Listening on port " + port);
});
