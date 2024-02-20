import axios from "axios"
import { useEffect,useState } from "react"


const API_URL = "http://localhost:3000";

function QuoteSlider () {
    
    const [quote,setQuote] = useState([]);

    useEffect(()=> {
        axios.get(`${API_URL}/space-quotes`)
        .then((response) => setQuote(response.data))
        .catch((error) => console.log(error))
    },[])
    
    const randomQuote = quote[Math.floor(Math.random() * (quote.length -1))];

    
    return (
        <div id="slider-container">
            <div id="scroll-text">
               {randomQuote && randomQuote.quote && <span> {randomQuote.quote}</span>} <span>Author: </span>{randomQuote && randomQuote.author && <span>{randomQuote.author}</span>}
            </div>
        </div>
    )
}

export default QuoteSlider