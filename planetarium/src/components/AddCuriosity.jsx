import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const API_URL = "https://mock-backend-server-planetarium.onrender.com/";

function AddCuriosity () {

    const [userFunFact, setUserFunFact] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // Fetch the existing data for the planet
            const response = await axios.get(`${API_URL}/planets/${id}`);
            const existingData = response.data;

            // Add the new user fun fact to the existing array
            const updatedData = {
                ...existingData,
                usersFunFacts: [
                    ...(existingData.usersFunFacts || []),
                    userFunFact
                ]
            };

            // Send a PATCH request to update the planet object with the new data
            await axios.put(`${API_URL}/planets/${id}`, updatedData);

            // After successfully updating, navigate to the planet page
            navigate(`/planets/${id}`);
        } catch (error) {
            console.error("Error adding fun fact:", error);
        }
    }

    return (
        <div className="form-container">
            <form className="forms" onSubmit={handleSubmit}>
                <label>Add your own Fun Fact</label>
                <input type="text" name="userFunFact" value={userFunFact} required onChange={(e)=> setUserFunFact(e.target.value)} />
                <button type="submit">Send to Space</button>
            </form>
        </div>
    )
}

export default AddCuriosity