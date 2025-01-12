const getURL = new URL(window.location.href);
export const isOnProduction: boolean = getURL.hostname !== "localhost";

export const convertTypesToFrench = (types: string[]): string[] => {
  return types.map((type: string) => {
    switch (type) {
      case "normal":
        return "Normal";
      case "fighting":
        return "Combat";
      case "flying":
        return "Vol";
      case "poison":
        return "Poison";
      case "ground":
        return "Sol";
      case "rock":
        return "Roche";
      case "bug":
        return "Insecte";
      case "ghost":
        return "Spectre";
      case "steel":
        return "Acier";
      case "fire":
        return "Feu";
      case "water":
        return "Eau";
      case "grass":
        return "Plante";
      case "electric":
        return "Électrik";
      case "psychic":
        return "Psy";
      case "ice":
        return "Glace";
      case "dragon":
        return "Dragon";
      case "dark":
        return "Ténèbres";
      case "fairy":
        return "Fée";
      case "stellar":
        return "Stellaire";
      case "unknown":
        return "???";
      default:
        return "unknown";
    }
  });
};
