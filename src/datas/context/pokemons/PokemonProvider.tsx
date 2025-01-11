import { useState, useMemo, ReactElement, useContext } from "react";

import { IPokemon } from "../../interfaces/pokemonInterface.ts";

import { PokemonContext } from "./PokemonContext";
import { LoaderContext } from "../loader/LoaderContext.tsx";

import { PokemonService } from "../../services/getPokemon.service";
const pokemonService = new PokemonService();

export const PokemonProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const { startLoading, stopLoading } = useContext(LoaderContext);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const getPokemons = async (limit: number) => {
    startLoading();
    try {
      const res = await pokemonService.fetchAllPokemonsInFrench(limit);
      setPokemons(res);
    } catch (error) {
      console.error(`Error while fetching pokemons : ${error}`);
      setPokemons([]);
    }
    stopLoading();
  };

  const contextValue = useMemo(
    () => ({
      pokemons,
      setPokemons,
      getPokemons,
    }),
    [pokemons],
  );

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};
