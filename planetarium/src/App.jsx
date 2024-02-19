import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import AddPlanet from "./pages/AddPlanet";
import PlanetDetail from "./pages/PlanetDetail";
/* import Error from "./pages/Error"; */

import { Routes, Route } from "react-router-dom";
import EditPlanet from "./pages/EditPlanet";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/planets/add" element={<AddPlanet />} />
        <Route path="/planets/:id" element={<PlanetDetail />} />
        <Route path="/planets/edit/:id" element={<EditPlanet />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </main>
  );
}

export default App;
