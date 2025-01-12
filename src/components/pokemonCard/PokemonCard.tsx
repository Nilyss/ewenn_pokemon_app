import "./pokemonCard.scss";

import { IPokemon } from "../../datas/interfaces/pokemonInterface";

import { ReactElement } from "react";

export default function PokemonCard({
  pokemon,
}: Readonly<{
  pokemon: IPokemon;
}>): ReactElement {
  return (
    <article id={"pokemonCard"} className={`${pokemon.types[0]}Bkgnd`}>
      <figure>
        <img src={pokemon.artwork} alt={pokemon.name} />
      </figure>
      <div className={"cardContent"}>
        <p className={"pokemonID"}>#{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <p className={'types'}>
          {pokemon.types.length > 1 ? "Types : " : "Type : "}{" "}
          {pokemon.types.join(", ")}
        </p>
        <div className={"btnContainer"}>
          <button className={"btn"}>Détails</button>
          <button className={"btn"}>Stats</button>
          <button className={"btn"}>Capacités</button>
        </div>
      </div>
    </article>
  );
}
