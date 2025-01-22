import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/about/About";
import CollegeEvents from "./components/events/CollegeEvents";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";

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
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<CollegeEvents />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<SingleDetails />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
