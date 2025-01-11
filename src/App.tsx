import "./utils/styles/global.scss";

import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { PokemonService } from "./datas/services/getPokemon.service.ts";
const pokemonService = new PokemonService();


import Header from "./components/header/Header";

import Home from "./views/home/Home";

function App() {
  const tryServices = async (): Promise<void> => {
    const res = await pokemonService.fetchAllPokemonsInFrench(151);
    console.log('response =>', res);
  };
  useEffect(() => {
    tryServices().finally();
  });

  return <>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  </>;
}

export default App;
