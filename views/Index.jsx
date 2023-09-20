import React from "react";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <h1>Here are some pokemon:</h1>
      {pokemon.length &&
        pokemon.map((poke) => {
          const name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
          return <li key={poke.name}>{name}</li>;
        })}
    </div>
  );
}

export default Index;
