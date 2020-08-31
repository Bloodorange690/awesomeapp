import React from "react";

export default function Pokemon(props) {
  console.log("abilities", props.pokemon.abilities.split(", "));
  const { abilities, name, weight, awesome, terrifying } = props.pokemon;
  const abilitiesArray = abilities.split(", ");
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities: {props.abilities}</p>
    </div>
  );
}
