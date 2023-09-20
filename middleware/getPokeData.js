const https = require("https");

const getPokeData = (pokemon) => {
  return async (req, res, next) => {
    const name = req.body.name ? req.body.name : pokemon[req.params.id].name;
    await https
      .get("https://pokeapi.co/api/v2/pokemon/" + name, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });
        resp.on("end", () => {
          req.pokemonData = JSON.parse(data);
          next();
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  };
};

module.exports = { getPokeData };
