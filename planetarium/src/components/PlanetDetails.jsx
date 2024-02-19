import axios from "axios";
import { useParams } from "react-router-dom";
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
                    <p>Day length: {planet.dayLength}</p>
                    <p>Year length: {planet.yearLength}</p>
                    <p>Average temperature: {planet.averageTemperature}</p>
                    <p>Number of Moons: {planet.moons}</p>
                    {planet.basicDetails && planet.basicDetails.volume && <p>Volume: {planet.basicDetails.volume}</p>}
                    {planet.basicDetails && planet.basicDetails.mass && <p>Mass: {planet.basicDetails.mass}</p>}
                </section>
                <section>
                    <h2>{planet.description}</h2>
                    <h3>Fun Facts:</h3>
                    <ul>
                        {planet.funFacts && planet.funFacts.funFactsOne && <li>{planet.funFacts.funFactsOne}</li>}
                        {planet.funFacts && planet.funFacts.funFactsTwo &&<li>{planet.funFacts.funFactsTwo}</li>}
                    </ul>
                </section>
                </div>}
        </div>
    )
}

export default PlanetDetails