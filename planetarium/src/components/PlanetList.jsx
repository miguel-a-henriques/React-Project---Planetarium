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
          planet.id <= 8 ? (
            <section key={planet.id} className="cards ">
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
          ): 
          <section className="newPlanets">
            <div className="divider">
              <div className="addYourOwn">
                <h1>Add your Own</h1>
              </div>
              <div className="rocketSlider">
                <img src="https://i.ibb.co/54Cg2QK/96d2ccb9cb708160f82c3d36aba5e0fc-removebg-preview.png" alt="rocket cruising through space"/>
              </div>
            </div>
            <div>
            <section key={planet.id} className="cards ">
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
          </section>
        )
        })}
        <div className="cards">
          <Link to={"/planets/add"}>
            <img src="https://i.ibb.co/LgNwBBq/icons8-add-100.png" alt="add your own planet" />
          </Link>
        </div>
    </div>
  );
}

export default PlanetList;
