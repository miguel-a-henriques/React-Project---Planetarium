import NewPlanetList from "../components/NewPlanetList";
import PlanetList from "../components/PlanetList";
import QuoteSlider from "../components/Quoteslider";

function Homepage() {
  return (
    <div>
      <div>
        <QuoteSlider className="slider" />
      </div>
      <div>
        <PlanetList />
      </div>
      <div>
        <h1 className="addNew">Add your Own</h1>
      </div>
      <div>
        <NewPlanetList />
      </div>
    </div>
  );
}

export default Homepage;
