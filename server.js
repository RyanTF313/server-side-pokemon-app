const express = require("express");
const jsxViewEngine = require("jsx-view-engine");
const { pokemon } = require("./models/pokemon");
const { getPokeData } = require("./middleware/getPokeData");
const { log } = require("console");

const app = express();
const port = 3005;

app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.method + " at " + req.path);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the pokemon app!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});
app.get("/pokemon/new", function (req, res) {
  res.render("New");
});

app.get("/pokemon/:id", getPokeData(pokemon), (req, res) => {
  res.render("Show", {
    pokemon: { ...pokemon[req.params.id], ...req.pokemonData },
  });
});

app.post("/pokemon", getPokeData(pokemon), (req, res) => {
  if (!req.body.img) {
    req.body.img =
      req.pokemonData.sprites.other["official-artwork"]["front_default"];
  }
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
