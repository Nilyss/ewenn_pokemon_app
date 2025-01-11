import "./pokemonDetails.scss";

import { IPokemon } from "../../datas/interfaces/pokemonInterface.ts";

import { ReactElement } from "react";

export default function PokemonDetails({
  pokemon,
}: {
  pokemon: IPokemon;
}): ReactElement {
  return (
    <div className={"pokemonDetails"}>
      PokemonDetails for pokemon ${pokemon.id} works !
    </div>
  );
}
