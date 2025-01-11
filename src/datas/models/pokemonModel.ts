import { IPokemon } from "../interfaces/pokemonInterface";

export const pokemonModel = (pokemon: IPokemon) =>{
    return {
        id: pokemon.id,
        name: pokemon.name,
        description: pokemon.description,
        image: pokemon.image,
        artwork: pokemon.artwork,
    }
}