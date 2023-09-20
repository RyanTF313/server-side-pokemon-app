import React from "react";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <h2><a href="pokemon/new">Catch a new pokemon!</a></h2>
      <h1>Here are some pokemon:</h1>
      {pokemon.length &&
        pokemon.map((poke, index) => {
          const name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
          return (
            <li key={poke.name}>
              <a href={`pokemon/${index}`}>{name}</a>
            </li>
          );
        })}
    </div>
  );
}

export default Index;
