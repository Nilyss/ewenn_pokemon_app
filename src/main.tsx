import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { PokemonProvider } from "./datas/context/pokemons/PokemonProvider.tsx";
import { LoaderProvider } from "./datas/context/loader/LoaderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <LoaderProvider>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </LoaderProvider>,
);
