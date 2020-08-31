import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: true,
    abilities: "Solar power, Tough claws, Drought",
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: "Overgrow, Chlorophyll",
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: false,
    abilities: "Pressure, Unnerve, Steadfast, Insomnia",
  },
  {
    name: "Mega beedrill",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: "Intimidate, Unnerve",
  },
];

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <Pokemon />
      </main>

      <header className="App-header">
        <p>I want to be an elephant and eat cotton candies all day long</p>
        <p>I hope it will work</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur
        </a>
      </header>
    </div>
  );
}

export default App;
