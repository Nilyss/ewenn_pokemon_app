import { getRequest } from "../APICalls";

import { IPokemon } from "../interfaces/pokemonInterface";
import { pokemonModel } from "../models/pokemonModel";
import {convertTypesToFrench} from "../../utils/Utils.ts";

export class PokemonService {
  fetchPokemonInFrench = async (pokemonId: string) => {
    try {
      const speciesRes = await getRequest(`/pokemon-species/${pokemonId}`);
      const pokemonRes = await getRequest(`/pokemon/${pokemonId}`);

      const frenchName =
        speciesRes.data.names.find(
          (name): boolean => name.language.name === "fr",
        )?.name || "Nom non trouvé";

      const frenchFlavorText =
        speciesRes.data.flavor_text_entries.find(
          (entry): boolean => entry.language.name === "fr",
        )?.flavor_text || "Description non trouvée";

      const spriteUrl =
        pokemonRes.data.sprites.front_default || "Image non trouvée";

      const artworkUrl =
        pokemonRes.data.sprites.other["official-artwork"].front_default ||
        "Artwork non trouvé";

      const types = pokemonRes.data.types.map((type) => type.type.name) || [];
      const typesFr = convertTypesToFrench(types);

      const stats = pokemonRes.data.stats.reduce((acc, stat) => {
        acc[stat.stat.name] = stat.base_stat;
        return acc;
      }, {});

      const abilities =
        pokemonRes.data.abilities.map((ability) => ability.ability.name) || [];

      const moves = pokemonRes.data.moves.map((move) => move.move.name) || [];

      const evolutionsRes = await getRequest(
        speciesRes.data.evolution_chain.url,
      );
      const evolutionChain: string[] = [];

      const parseEvolutions = (chain) => {
        if (!chain) return;
        evolutionChain.push(chain.species.name);
        chain.evolves_to.forEach(parseEvolutions);
      };
      parseEvolutions(evolutionsRes.data.chain);

      return {
        id: parseInt(pokemonId),
        name: frenchName,
        description: frenchFlavorText,
        image: spriteUrl,
        artwork: artworkUrl,
        types: typesFr,
        stats: stats,
        abilities: abilities,
        moves: moves,
        evolutions: evolutionChain,
      };
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return null;
    }
  };

  fetchAllPokemons = async (limit: number) => {
    try {
      const res = await getRequest(`/pokemon?limit=${limit}`);

      return res.data.results;
    } catch (err) {
      console.error(`Error fetching first-generation Pokémon: ${err}`);
      return [];
    }
  };

  fetchAllPokemonsInFrench = async (limit: number): Promise<IPokemon[]> => {
    try {
      const pokemons = await this.fetchAllPokemons(limit);
      return await Promise.all(
        pokemons.map(
          async (pokemon: Array<object>): Promise<IPokemon | null> => {
            const id: string = pokemon.url.split("/").filter(Boolean).pop();
            const res: IPokemon | null = await this.fetchPokemonInFrench(id);
            if (res !== null) {
              return pokemonModel(res);
            } else {
              return null;
            }
          },
        ),
      );
    } catch (error) {
      console.error(`Error while fetching pokemons : ${error}`);
      return [] as IPokemon[];
    }
  };
}
