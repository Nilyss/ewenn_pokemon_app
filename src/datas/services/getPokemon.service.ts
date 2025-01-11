import { getRequest } from "../APICalls";

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
        )?.flavor_text || "Description non trouvé";

      const imageUrl =
        pokemonRes.data.sprites.front_default || "Image non trouvé";

      return {
        name: frenchName,
        description: frenchFlavorText,
        image: imageUrl,
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

  fetchAllPokemonsInFrench = async (limit: number) => {
    try {
      const pokemons = await this.fetchAllPokemons(limit);
      return await Promise.all(
        pokemons.map(async (pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          return await this.fetchPokemonInFrench(id);
        }),
      );
    } catch (error) {
      console.error(
        "Erreur lors de la rÃ©cupÃ©ration des PokÃ©mon :",
        error,
      );
      return [];
    }
  };
}
