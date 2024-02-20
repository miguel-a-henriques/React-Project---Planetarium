import PlanetList from "../components/PlanetList";
import QuoteSlider from "../components/Quoteslider";

function Homepage() {
    return (
        <div>
            <div>
            <QuoteSlider />
            </div>
        
            <div>
                <PlanetList />
            </div>
        </div>
    )
}

export default Homepage