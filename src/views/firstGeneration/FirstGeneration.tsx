import "./firstGeneration.scss";
import { IoArrowBack } from "react-icons/io5";

import { IPokemon } from "../../datas/interfaces/pokemonInterface.ts";

import { ReactElement, useContext, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { PokemonContext } from "../../datas/context/pokemons/PokemonContext";
import { LoaderContext } from "../../datas/context/loader/LoaderContext.tsx";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import Loader from "../../components/loader/Loader.tsx";

export default function FirstGeneration(): ReactElement {
  const { isLoading } = useContext(LoaderContext);
  const { pokemons, getPokemons } = useContext(PokemonContext);
  const navigate: NavigateFunction = useNavigate();

  useEffect((): void => {
    if (pokemons?.length === 0) {
      getPokemons(151).finally();
    }
  }, []);

  return (
    <main id={"firstGeneration"}>
      <div>
        <IoArrowBack
          className={"goBackIcn"}
          onClick={(): void => navigate("/")}
        />
      </div>
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={"cardContainer"}>
            {pokemons?.map((pokemon: IPokemon): ReactElement => {
              return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
}
