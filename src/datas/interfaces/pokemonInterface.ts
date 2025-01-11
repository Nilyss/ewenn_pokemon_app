export interface IPokemon {
  id: number;
  name: string;
  description: string;
  image: string;
  artwork: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: string[];
  moves: string[];
  evolutions: string[];
}