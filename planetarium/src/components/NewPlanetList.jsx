import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000";

function NewPlanetList() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/planets`)
      .then((response) => setPlanets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {planets &&
        planets.map((planet) => {
          return (
            planet.id > 8 && (
              <div className="secondList">
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
                <Link to={"/planets/add"}>
                  <div className="cards empty">
                    <img
                      src="https://i.ibb.co/LgNwBBq/icons8-add-100.png"
                      alt="add your own planet"
                    />
                  </div>
                </Link>
              </div>
            )
          );
        })}
    </div>
  );
}

export default NewPlanetList;