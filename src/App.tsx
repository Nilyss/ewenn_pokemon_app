import "./utils/styles/global.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Home from "./views/home/Home";
import FirstGeneration from "./views/firstGeneration/FirstGeneration";
import PokemonDetails from "./views/pokemonDetails/PokemonDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first_generation" element={<FirstGeneration />} />
        <Route path="/details/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
