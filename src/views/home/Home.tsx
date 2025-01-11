import "./home.scss";
import bulbi from "../../assets/bulbi.png";

import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Home(): ReactElement {
  const menuCards = [
    {
      index: 0,
      title: "Première génération",
      bckgnd: bulbi,
      link: "/first_generation",
    },
  ];

  return (
    <main id={"home"}>
      {menuCards.map((card) => {
        return (
          <div className={"linkCard"} key={card.index}>
            <Link to={card.link} className={"cardContent"}>
              <figure>
                <img src={card.bckgnd} alt={"first generation"} />
                <figcaption>{card.title}</figcaption>
              </figure>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
