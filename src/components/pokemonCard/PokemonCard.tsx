import "./pokemonCard.scss";

import { IPokemon } from "../../datas/interfaces/pokemonInterface";

import { ReactElement, useState } from "react";

export default function PokemonCard({
  pokemon,
}: Readonly<{
  pokemon: IPokemon;
}>): ReactElement {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(true);
  const [isDescOpen, setIsDescOpen] = useState<boolean>(false);
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);

  const openDetails = (): void => {
    setIsDetailsOpen(true);
    setIsStatsOpen(false);
    setIsDescOpen(false);
  };

  const openDesc = (): void => {
    setIsDetailsOpen(false);
    setIsStatsOpen(false);
    setIsDescOpen(true);
  };

  const openStats = (): void => {
    setIsDetailsOpen(false);
    setIsStatsOpen(true);
    setIsDescOpen(false);
  };

  const CardButtonContainer = (): ReactElement => {
    return (
      <div className={"btnContainer"}>
        <button onClick={openDetails} className={isDetailsOpen ? "active" : ""}>
          Détails
        </button>
        <button onClick={openDesc} className={isDescOpen ? "active" : ""}>
          Descri.
        </button>
        <button onClick={openStats} className={isStatsOpen ? "active" : ""}>
          Stats
        </button>
      </div>
    );
  };

  const DetailsContent = (): ReactElement => {
    return (
      <>
        <figure className={"artworkContainer"}>
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

  const DescContent = (): ReactElement => {
    return (
      <>
        <div className={"headerContent"}>
          <h3>Description</h3>
          <figure className={"spriteContainer"}>
            <img
              src={pokemon.image}
              alt={`${pokemon.name} sprite`}
              className={"pokemonSprite"}
            />
          </figure>
        </div>
        <div className={"bodyContent"}>
          <p>{pokemon.description}</p>
        </div>
        <CardButtonContainer />
      </>
    );
  };

  const StatsContent = (): ReactElement => {
    return (
      <>
        <div className={"headerContent"}>
          <h3>Stats</h3>
          <figure className={"spriteContainer"}>
            <img
              src={pokemon.image}
              alt={`${pokemon.name} sprite`}
              className={"pokemonSprite"}
            />
          </figure>
        </div>
        <div className={"bodyContent"}>
          <p>PV : {pokemon.stats.hp}</p>
          <p>ATK : {pokemon.stats.attack}</p>
          <p>DEF : {pokemon.stats.defense}</p>
          <p>VITESSE : {pokemon.stats.speed}</p>
        </div>
        <CardButtonContainer />
      </>
    );
  };

  console.log("moves =>", pokemon.moves);

  return (
    <article id={"pokemonCard"} className={`${pokemon.types[0]}Bkgnd`}>
      {isDetailsOpen && <DetailsContent />}
      {isDescOpen && <DescContent />}
      {isStatsOpen && <StatsContent />}
    </article>
  );
}
