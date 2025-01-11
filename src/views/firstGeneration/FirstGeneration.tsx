import "./firstGeneration.scss";

import {IPokemon} from "../../datas/interfaces/pokemonInterface.ts";

import { ReactElement, useContext, useEffect } from "react";
import { PokemonContext } from "../../datas/context/pokemons/PokemonContext";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

export default function FirstGeneration(): ReactElement {
  const { pokemons, getPokemons } = useContext(PokemonContext);

  useEffect((): void => {
    getPokemons(151).finally();
  }, []);

  return (
    <main id={"firstGeneration"}>
      <h2>Pokémon de première génération :</h2>
      {pokemons?.map((pokemon: IPokemon): ReactElement => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </main>
  );
}
