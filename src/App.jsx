import "./App.css";
import { Landing } from "./components/landing/Landing";
import NavBar from "./components/navbar/Navbar";
import Team from "./components/team/Team";
import { EventBanner } from "./components/eventBanner/EventBanner";
import { Events } from "./components/events/Events";
import Foot from "./components/footer/Foot";
import Clicks from "./components/clicks/Clicks";
import Contact from "./components/contact/Contact";
import Instapost from "./components/instapost/Instapost";
import About from "./components/about/About";
// import Team from './components/team/Team'
import Dep from "./components/departments/Departments";
import MainPoster from "./MainPoster";
import Sc from './components/team/Scroll1'
function App() {
  return (
    <>
      <div className="bg-bg1 bg-cover  ">
        <MainPoster />
        <NavBar />
        <Landing />
        <Dep />
        <Sc/>
        <Team />
        <Foot />
        {/* <Events/> */}
        {/* <NavBar/> */}
        {/* <Landing/> */}
        {/* <Landing/>
      <EventBanner/>
      // <Events/>
      <Clicks/>
      <Contact/>
   
      {/* <Team/> */}
      </div>
    </>
  );
}

export default App;
