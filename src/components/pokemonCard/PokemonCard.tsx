import "./pokemonCard.scss";

import { IPokemon } from "../../datas/interfaces/pokemonInterface";

import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({
  pokemon,
}: Readonly<{
  pokemon: IPokemon;
}>): ReactElement {
  console.log("pokemonType: ", pokemon.types);
  return (
    <Link to={`/details/id=${pokemon.id}`} id={"pokemonCard"}>
      <div className={`typeBckgnd ${pokemon.types[0]}Bkgnd`}></div>
      <figure>
        <img src={pokemon.artwork} alt={pokemon.name} />
      </figure>
      <div className={"cardHeader"}>
        <h3>{pokemon.name}</h3>
      </div>
      <div className={"cardContent"}>
        <p>{pokemon.description}</p>
      </div>
    </Link>
  );
}
