import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000";

function PlanetDetails() {
  const [planet, setPlanet] = useState({});
  const [planets, setPlanets] = useState();

  const { id } = useParams();
  

  useEffect(() => {
    axios
      .get(`${API_URL}/planets/${id}`)
      .then((response) => setPlanet(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(()=> {
    axios
    .get(`${API_URL}/planets`)
    .then((response) => setPlanets(response.data))
    .catch((error) => console.log(error))
  },[])

  return (
    <div className="details-container">
      {planet && (
        <div>
          <article className="planetsNav">
            {id > 1 && <Link reloadDocument to={`/planets/${planet.id-1}`}><h1>⇦</h1> </Link>}
            <h1>{planet.name}</h1>
            {planets &&  id < planets.length && <Link reloadDocument to={`/planets/${planet.id+1}`}><h1>⇨</h1> </Link>}
          </article>
          <section className="details-container-top">
            <div className="details-container-img">
              {planet.imgSrc && planet.imgSrc.img && (
                <img
                  src={planet.imgSrc.img}
                  alt={planet.imgSrc.imgDescription}
                />
              )}
            </div>
            <div className="details-container-text">
              {planet.dayLength && <p>Day length: {planet.dayLength}</p>}
              {planet.yearLength && <p>Year length: {planet.yearLength}</p>}
              {planet.averageTemperature && (
                <p>Average temperature: {planet.averageTemperature}</p>
              )}
              {planet.moons && <p>Number of Moons: {planet.moons}</p>}
              {planet.basicDetails && planet.basicDetails.volume && (
                <p>Volume: {planet.basicDetails.volume}</p>
              )}
              {planet.basicDetails && planet.basicDetails.mass && (
                <p>Mass: {planet.basicDetails.mass}</p>
              )}
            </div>
          </section>
          <section className="container-description">
            {planet.planetOrder && (
              <h3>Order from the Sun: {planet.planetOrder}</h3>
            )}
            {planet.description && <p>{planet.description}</p>}
            <h3>Fun Facts:</h3>
            <ul>
              {planet.funFacts && planet.funFacts.funFactsOne && (
                <li>{planet.funFacts.funFactsOne}</li>
              )}
              {planet.funFacts && planet.funFacts.funFactsTwo && (
                <li>{planet.funFacts.funFactsTwo}</li>
              )}
            </ul>

            <a href={planet.wikiLink} target="_blank">
              Wikipedia Link
            </a>
            <h3>Users Fun Facts:</h3>
            {planet && planet.usersFunFacts && planet.usersFunFacts.map(element => {
            return (
            <div>
              <ul>
                <li>{element}</li>
              </ul>
            </div>)
          })}
          </section>

        </div>
      )}
      <Link to={`/planets/addcuriosity/${planet.id}`}>
        {planet && planet.id <= 8 && (
          <div>
            <button>Add your own curiosity!</button>
          </div>
        )}
      </Link>
      <Link to={`/planets/edit/${planet.id}`}>
        {planet && planet.id > 8 && (
          <div>
            <button>Know something we don't know?</button>
          </div>
        )}
      </Link>
    </div>
  );
}

export default PlanetDetails;
