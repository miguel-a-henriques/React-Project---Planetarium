import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/planet/add" element={<AddPlanet />} />
        <Route path="/planet/:id" element={<PlanetDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
