import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleDetails from "./components/events/SingleDetails";
import MainPoster from "./MainPoster";
import NavBar from "./components/navbar/Navbar";
import Foot from "./components/footer/Foot";
function App() {
  return (
    <div className="scroll-smooth">
      <MainPoster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<SingleDetails />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
