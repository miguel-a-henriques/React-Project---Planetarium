import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://mock-backend-server-planetarium.onrender.com";

function NewPlanetList() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/planets`)
      .then((response) => setPlanets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="secondList">
      {planets &&
        planets.map((planet) => {
          return (
            planet.id > 8 && (
              <div key={planet.id}>
                <section className="cards">
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
              </div>
            )
          );
        })}
        <Link to={"/planets/add"}>
          <div className="cards empty">
            <img
              src="https://i.ibb.co/LgNwBBq/icons8-add-100.png"
              alt="add your own planet"
            />
          </div>
        </Link>
    </div>
  );
}

export default NewPlanetList;
