import { useState, useMemo, ReactElement } from "react";

import {IPokemon} from "../../interfaces/pokemonInterface.ts";

import { PokemonContext } from "./PokemonContext";

import { PokemonService } from "../../services/getPokemon.service";
const pokemonService = new PokemonService();

export const PokemonProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const getPokemons = async (limit: number) => {
    try {
      const res = await pokemonService.fetchAllPokemonsInFrench(limit);
      setPokemons(res);
    } catch (error) {
      console.error(`Error while fetching pokemons : ${error}`);
      setPokemons([]);
    }
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
