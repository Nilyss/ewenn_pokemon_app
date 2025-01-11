import { Context, createContext, Dispatch, SetStateAction } from "react";

import { IPokemon } from "../../interfaces/pokemonInterface.ts";

interface IPokemonContext {
  pokemons: IPokemon[] | null;
  setPokemons: Dispatch<SetStateAction<IPokemon[]>>;
  getPokemons: (limit: number) => Promise<void>;
}

const defaultPokemonContext: IPokemonContext = {
  pokemons: null,
  setPokemons: (): Dispatch<SetStateAction<IPokemon[]>> =>
    ({}) as Dispatch<SetStateAction<IPokemon[]>>,
  getPokemons: async () => {},
};

export const PokemonContext: Context<IPokemonContext> =
  createContext<IPokemonContext>(defaultPokemonContext);
