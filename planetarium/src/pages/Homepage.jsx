import NewPlanetList from "../components/NewPlanetList";
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
            <div>
                <h1>Add your Own</h1>
            </div>
            <div>
                <NewPlanetList />
            </div>
        </div>
    )
}

export default Homepage