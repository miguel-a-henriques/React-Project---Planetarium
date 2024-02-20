import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:3000";

function AddCuriosity () {

    const [userFunFact, setUserFunFact] = useState("")

    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const curiosity = {usersFunFacts: userFunFact}

        axios
            .post(`${API_URL}/planets/${id}`, curiosity)
            .then(() => navigate(`/planets/${id}`))
            .catch((error) => console.log(error))
    }

    return (
        <div className="form-container">
            <form className="forms" onSubmit={handleSubmit}>
                <label>Add your own Fun Fact</label>
                <textarea name="userFunFact" value={userFunFact} required onChange={(e)=> setUserFunFact(e.target.value)} />
                <button type="submit">Send to Space</button>
            </form>
        </div>
    )
}

export default AddCuriosity