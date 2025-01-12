import "./pokemonCard.scss";

import { IPokemon } from "../../datas/interfaces/pokemonInterface";

import { ReactElement, useState } from "react";

export default function PokemonCard({
  pokemon,
}: Readonly<{
  pokemon: IPokemon;
}>): ReactElement {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(true);
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [isCapaOpen, setIsCapaOpen] = useState<boolean>(false);

  const openDetails = (): void => {
    setIsDetailsOpen(true);
    setIsStatsOpen(false);
    setIsCapaOpen(false);
  };

  const openStats = (): void => {
    setIsDetailsOpen(false);
    setIsStatsOpen(true);
    setIsCapaOpen(false);
  };

  const openCapa = (): void => {
    setIsDetailsOpen(false);
    setIsStatsOpen(false);
    setIsCapaOpen(true);
  };

  const CardButtonContainer = (): ReactElement => {
    return (
      <div className={"btnContainer"}>
        <button onClick={openDetails} className={isDetailsOpen ? "active" : ""}>
          Détails
        </button>
        <button onClick={openStats} className={isStatsOpen ? "active" : ""}>
          Stats
        </button>
        <button onClick={openCapa} className={isCapaOpen ? "active" : ""}>
          Capacités
        </button>
      </div>
    );
  };

  const DetailsContent = (): ReactElement => {
    return (
      <>
        <figure>
          <img
            src={pokemon.artwork}
            alt={pokemon.name}
            className={"pokemonArtwork"}
          />
        </figure>
        <div className={"cardContent"}>
          <p className={"pokemonID"}>#{pokemon.id}</p>
          <h3>{pokemon.name}</h3>
          <p className={"types"}>
            {pokemon.types.length > 1 ? "Types : " : "Type : "}{" "}
            {pokemon.types.join(", ")}
          </p>
          <CardButtonContainer />
        </div>
      </>
    );
  };

  const StatsContent = (): ReactElement => {
    return (
      <>
        <h3>Stats</h3>
        <p>HP : {pokemon.stats.hp}</p>
        <p>ATK : {pokemon.stats.attack}</p>
        <p>DEF : {pokemon.stats.defense}</p>
        <p>Sp.Atk : {pokemon.stats.specialAttack}</p>
        <p>Sp.Def : {pokemon.stats.specialDefense}</p>
        <p>Speed : {pokemon.stats.speed}</p>
        <CardButtonContainer />
      </>
    );
  };

  const CapaContent = (): ReactElement => {
    return (
      <>
        <h3>Capacités</h3>
        <p>Vol : {pokemon.stats.hp}</p>
        <p>Poison : {pokemon.stats.attack}</p>
        <p>Sol : {pokemon.stats.defense}</p>
        <p>Roche : {pokemon.stats.specialAttack}</p>
        <p>Insecte : {pokemon.stats.specialDefense}</p>
        <p>Spectre : {pokemon.stats.speed}</p>
        <CardButtonContainer />
      </>
    );
  };

  return (
    <article id={"pokemonCard"} className={`${pokemon.types[0]}Bkgnd`}>
      {isDetailsOpen && <DetailsContent />}
      {isStatsOpen && <StatsContent />}
      {isCapaOpen && <CapaContent />}
    </article>
  );
}
