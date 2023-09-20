import React from "react";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Show({ pokemon }) {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div style={myStyle}>
      <h1>Gotta catch em all!</h1>
      <p>
        <a href="/pokemon">Back</a>
      </p>
      <h2>{name}</h2>
      <img src={pokemon.img + ".jpg"} alt={name + " image"} />
      <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p>
      <p>types: </p>
      <ul>
        {pokemon.types.length &&
          pokemon.types.map((type) => <li>{type.type.name}</li>)}
      </ul>
      <p>abilities: </p>
      <ul>
        {pokemon.abilities.length &&
          pokemon.abilities.map((ability) => <li>{ability.ability.name}</li>)}
      </ul>
      <p>moves: </p>
      <ul>
        {pokemon.moves.length &&
          pokemon.moves.map((move) => <li>{move.move.name}</li>)}
      </ul>
    </div>
  );
}

export default Show;
