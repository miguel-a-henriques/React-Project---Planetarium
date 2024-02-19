import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";


function AddPlanet () {

    const [name,SetName] = useState("");
    const [description,SetDescription] = useState("");
    const [wikiLink, setWikiLink] = useState("Wikipedia url");
    const [img, setImg] = useState("Image url");
    const [moons, setMoons] = useState(0);
    const [funFactOne, setFunFactOne] = useState("");
    const [funFactTwo, setFunFactTwo] = useState("");

    const navigate = useNavigate();


    function handleSubmit () {

    e.preventDefault();

    const planet = {name, description, wikiLink, imgSrc:{img}, moons, funFacts:{funFactOne, funFactTwo}}

    axios.post(`${API_URL}/planets`, planet)
    .then((response)=> navigate('/'))
    .catch((error) => console.log)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={name} required onChange={(e) => SetName(e.target.value)} />
            <label>Description</label>
            <input type="text" name="description" value={description} required onChange={(e) => SetDescription(e.target.value)} />
            <label>WikiLink</label>
            <input type="text" name="wikiLink" value={wikiLink} required onChange={(e) => setWikiLink(e.target.value)} />
            <label>Image</label>
            <input type="text" name="img" value={img} required onChange={(e) => setImg(e.target.value)} />
            <label>Moons</label>
            <input type="number" name="moons" value={moons} min={0} onChange={(e) => setMoons(e.target.value)} />
            <label>Fun Fact One</label>
            <input type="text" name="funFactOne" value={funFactOne} required onChange={(e) => setFunFactOne(e.target.value)} />
            <label>Fun Fact Two</label>
            <input type="text" name="funFactTwo" value={funFactTwo} required onChange={(e) => setFunFactTwo(e.target.value)} />
            <button type="submit">Send to Space</button>
        </form>
    )
}

export default AddPlanet