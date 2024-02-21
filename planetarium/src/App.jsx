import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import AddPlanet from "./pages/AddPlanet";
import PlanetDetail from "./pages/PlanetDetail";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import EditPlanet from "./pages/EditPlanet";
import Footer from "./components/Footer";
import AddCuriosity from "./components/AddCuriosity";
import { useEffect, useState } from "react";
import intro from "./images/intro.mp4";

function App() {

  const [video, setVideo] = useState(true);

  useEffect(()=> {
    const timeOut = setTimeout(()=> {
      setVideo(false);
    }, 8000);
    return () => clearTimeout (timeOut)
  },[])
  return (
    <main id="main">
      {video && (
        <video autoPlay muted style={{margin: "50px auto"}}>
          <source src={intro} type="video/mp4" autoFocus/>
        </video>
      )}
      {!video && (<div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/planets/add" element={<AddPlanet />} />
          <Route path="/planets/:id" element={<PlanetDetail />} />
          <Route path="/planets/edit/:id" element={<EditPlanet />} />
          <Route path="/planets/addcuriosity/:id" element={<AddCuriosity />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>)
      }
    </main>
  );
}

export default App;
