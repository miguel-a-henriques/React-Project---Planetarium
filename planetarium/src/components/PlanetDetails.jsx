import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000";

function PlanetDetails () {
    
    const [planet,setPlanet] = useState({});

    const {id} = useParams();

    useEffect(()=> {
        axios.get(`${API_URL}/planets/${id}`)
        .then((response) => setPlanet(response.data))
        .catch((error) => console.log(error))
    },[])

    return (
        <div>
            {planet && <div>
                <h1>{planet.name}</h1>
                <section>
                    {planet.imgSrc && planet.imgSrc.img && <img src={planet.imgSrc.img} alt={planet.imgSrc.imgDescription} />}
                    {planet.dayLength && <p>Day length: {planet.dayLength}</p>}
                    {planet.yearLength && <p>Year length: {planet.yearLength}</p>}
                    {planet.averageTemperature && <p>Average temperature: {planet.averageTemperature}</p>}
                    {planet.moons && <p>Number of Moons: {planet.moons}</p>}
                    {planet.basicDetails && planet.basicDetails.volume && <p>Volume: {planet.basicDetails.volume}</p>}
                    {planet.basicDetails && planet.basicDetails.mass && <p>Mass: {planet.basicDetails.mass}</p>}
                </section>
                <section>
                    {planet.planetOrder && <h2>Order from the Sun: {planet.planetOrder}</h2>}
                    {planet.description && <h2>{planet.description}</h2>}
                    <h3>Fun Facts:</h3>
                    <ul>
                        {planet.funFacts && planet.funFacts.funFactsOne && <li>{planet.funFacts.funFactsOne}</li>}
                        {planet.funFacts && planet.funFacts.funFactsTwo &&<li>{planet.funFacts.funFactsTwo}</li>}
                    </ul>
                </section>
                <a href={planet.wikiLink} target="_blank">Wikipedia Link</a>
                </div>
                }
                <Link to={`/planets/edit/${planet.id}`}>
                {planet && planet.id > 8 && <div>
                    <button>Know something we don't know?</button>
                    </div>}
                </Link>
                
        </div>
    )
}

export default PlanetDetails