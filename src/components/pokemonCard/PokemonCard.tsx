import "./pokemonCard.scss";

import { IPokemon } from "../../datas/interfaces/pokemonInterface";

import { ReactElement } from "react";

export default function PokemonCard({
  pokemon,
}: {
  pokemon: IPokemon;
}): ReactElement {
  return (
    <li id={"pokemonCard"}>
      <figure>
        <img src={pokemon.artwork} alt={pokemon.name} />
      </figure>
      <div className={"cardHeader"}>
        <h3>{pokemon.name}</h3>
      </div>
      <div className={"cardContent"}>
        <p>{pokemon.description}</p>
      </div>
    </li>
  );
}
