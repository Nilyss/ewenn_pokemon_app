import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { PokemonProvider } from "./datas/context/pokemons/PokemonProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <PokemonProvider>
    <App />
  </PokemonProvider>,
);
