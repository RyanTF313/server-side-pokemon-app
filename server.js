const express = require("express");
const https = require("https");
const jsxViewEngine = require("jsx-view-engine");
const { pokemon } = require("./models/pokemon");
const { log } = require("console");

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
const getPokeData = async (req, res, next) => {
  await https
    .get(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon[req.params.id].name,
      (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });
        resp.on("end", () => {
          req.pokemonData = JSON.parse(data);
          next();
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};
app.get("/pokemon/:id", getPokeData, (req, res) => {
  res.render("Show", {
    pokemon: { ...pokemon[req.params.id], ...req.pokemonData },
  });
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
