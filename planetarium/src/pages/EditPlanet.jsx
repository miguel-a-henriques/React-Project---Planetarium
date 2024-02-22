import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://mock-backend-server-planetarium.onrender.com";

function EditPlanet () {

    const {id} = useParams();

    const [name,SetName] = useState("");
    const [description,SetDescription] = useState("");
    const [wikiLink, setWikiLink] = useState("");
    const [img, setImg] = useState("");
    const [moons, setMoons] = useState(0);
    const [funFactOne, setFunFactOne] = useState("");
    const [funFactTwo, setFunFactTwo] = useState("");
    const [dayLength, setDayLength] = useState("");
    const [yearLength, setYearLength] = useState("");
    const [averageTemperature, setAverageTemperature] = useState("");
    const [volume, setVolume] = useState("");
    const [mass, setMass] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {
        axios
        .get(`${API_URL}/planets/${id}`)
        .then((response)=> {
            SetName(response.data.name)
            SetDescription(response.data.description)
            setWikiLink(response.data.wikiLink)
            setImg(response.data.imgSrc.img)
            setMoons(response.data.moons)
            setFunFactOne(response.data.funFacts.funFactsOne)
            setFunFactTwo(response.data.funFacts.funFactsTwo)
            setDayLength(response.data.dayLength)
            setYearLength(response.data.yearLength)
            setAverageTemperature(response.data.averageTemperature)
            setVolume(response.data.basicDetails.volume)
            setMass(response.data.basicDetails.mass)
        })
        .catch((error) => console.log(error))
    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        const planet = {name, description, wikiLink, imgSrc:{img: img}, moons, funFacts:{funFactsOne:funFactOne, funFactsTwo:funFactTwo}, dayLength, yearLength, averageTemperature, basicDetails:{mass: mass, volume: volume}};

        axios
        .put(`${API_URL}/planets/${id}`, planet)
        .then(()=> navigate(`/planets/${id}`))
        .catch((error)=> console.log(error))
    }

    const deletePlanet = () => {
        axios.delete(`${API_URL}/planets/${id}`)
        .then(() => navigate('/'))
        .catch((error) => console.log(error))
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="forms">
                <label>Name</label>
                <input type="text" name="name" value={name} required onChange={(e) => SetName(e.target.value)} />
                <label>Description</label>
                <input className="descriptionBox" type="text" name="description" value={description} required onChange={(e) => SetDescription(e.target.value)} />
                <label>WikiLink</label>
                <input type="text" name="wikiLink" value={wikiLink} placeholder="Wikipedia Link" required onChange={(e) => setWikiLink(e.target.value)} />
                <label>Image</label>
                <input type="text" name="img" value={img} placeholder="Image URL"required onChange={(e) => setImg(e.target.value)} />
                <label>Moons</label>
                <input type="number" name="moons" value={moons} min={0} onChange={(e) => setMoons(e.target.value)} />
                <label>Fun Fact One</label>
                <input type="text" name="funFactOne" value={funFactOne} required onChange={(e) => setFunFactOne(e.target.value)} />
                <label>Fun Fact Two</label>
                <input type="text" name="funFactTwo" value={funFactTwo} required onChange={(e) => setFunFactTwo(e.target.value)} />
                <label>Day Length</label>
                <input type="text" name="dayLength" value={dayLength} placeholder="optional" onChange={(e) => setDayLength(e.target.value)} />
                <label>Year Length</label>
                <input type="text" name="yearLength" value={yearLength} placeholder="optional" onChange={(e) => setYearLength(e.target.value)} />
                <label>Average Temperature</label>
                <input type="text" name="averageTemperature" value={averageTemperature} placeholder="optional" onChange={(e) => setAverageTemperature(e.target.value)} />
                <label>Mass</label>
                <input type="text" name="mass" value={mass} placeholder="optional" onChange={(e) => setMass(e.target.value)}/>
                <label>Volume</label>
                <input type="text" name="volume" value={volume} placeholder="optional" onChange={(e)=> setVolume(e.target.value)}/>
                <button type="submit">Send to Space</button>
                <button className="delete" onClick={deletePlanet}>Send to BlackHole</button>
            </form>
        </div>
        
    )
}

export default EditPlanet