import "./header.scss";
import pokedexImg from "../../assets/pokedex.webp";

import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Header(): ReactElement {
  return (
    <header id={"header"}>
        <Link to={"/"}>
          <figure>
            <img src={pokedexImg} alt={"pokedex"} />
          </figure>
        </Link>
      <h1>Bienvenue sur le Pokédex d'Ewenn !</h1>
    </header>
  );
}
