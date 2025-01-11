import "./pokemonDetails.scss";
import {IoArrowBack} from "react-icons/io5";

import { IPokemon } from "../../datas/interfaces/pokemonInterface.ts";

import { ReactElement, useContext, useState, useEffect } from "react";
import { useNavigate, NavigateFunction, useParams } from "react-router-dom";

import { LoaderContext } from "../../datas/context/loader/LoaderContext.tsx";
import { PokemonContext } from "../../datas/context/pokemons/PokemonContext.tsx";

import Loader from "../../components/loader/Loader.tsx";
import Button from "../../components/button/Button";

export default function PokemonDetails(): ReactElement {
  const navigate: NavigateFunction = useNavigate();
  const { id } = useParams<{ id: string }>();
  const parsedID: string | undefined = id?.split("=")[1] ?? id;
  const { isLoading, startLoading, stopLoading } = useContext(LoaderContext);
  const { pokemons, getPokemons } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState<IPokemon | undefined | null>(null);

  useEffect((): void => {
    if (!pokemon) {
      if (id && pokemons && pokemons?.length >= 1) {
        startLoading();
        const selectedPokemon: IPokemon | undefined = pokemons.find(
          (pokemon: IPokemon): boolean => pokemon.id.toString() === parsedID,
        );
        setPokemon(selectedPokemon);
        stopLoading();
      } else {
        getPokemons(151).finally();
      }
    }
  }, [id, pokemons]);

  return (
      <main id={"pokemonDetails"}>
        <div>
          <IoArrowBack
              className={"goBackIcn"}
              onClick={(): void => navigate("/first_generation")}
          />
        </div>
        {isLoading ? (
            <Loader/>
        ) : (
            <>
              {pokemon ? (
                  <>
                    <div className={"detailsHeader"}>
                      <h2>
                        Détail du Pokemon numéro {pokemon.id} : {pokemon.name}{" "}
                      </h2>
                      <figure>
                        <img src={pokemon.image} alt={`Sprite of ${pokemon.name}`}/>
                      </figure>
                    </div>
                    <div className={"detailsBody"}>
                      <ul>
                        <li>
                          {pokemon.types.length > 1 ? `Types : ` : `Type : `}
                          {pokemon.types}
                        </li>
                      </ul>
                    </div>
                  </>
              ) : (
                  <h2>Pokemon not found.</h2>
              )}
            </>
        )}

        <div className={"buttonContainer"}>
          <Button
              props={{
                style: "grey",
                text: "Retour",
                type: "button",
                onClick: (): void => navigate('/first_generation'),
              }}
          />
        </div>
      </main>
  );
}
