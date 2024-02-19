import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000";

function PlanetList() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/planets`)
      .then((response) => setPlanets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="planet-container">
      {planets &&
        planets.map((planet) => {
          return (
            <section key={planet.id} className="cards">
              <Link to={`/planets/${planet.id}`}>
                <div className="img-container">
                  <img
                    src={planet.imgSrc.img}
                    alt={planet.imgSrc.imgDescription}
                  />
                </div>
                <div className="name-container">
                  <h1>{planet.name}</h1>
                </div>
              </Link>
            </section>
          );
        })}
    </div>
  );
}

export default PlanetList;
