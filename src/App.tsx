import "./utils/styles/global.scss";

import { IPokemon } from "./datas/interfaces/pokemonInterface.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Home from "./views/home/Home";
import FirstGeneration from "./views/firstGeneration/FirstGeneration";
import PokemonDetails from "./views/pokemonDetails/PokemonDetails";

function App() {
  const pokemon: IPokemon | null = null

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first_generation" element={<FirstGeneration />} />
          <Route
            path="details/:pokemonId"
            element={<PokemonDetails pokemon={pokemon!} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
