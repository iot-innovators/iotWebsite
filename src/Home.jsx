import React from "react";
import { Landing } from "./components/landing/Landing";

import Team from "./components/team/Team";

import About from "./components/about/About";
// import Team from './components/team/Team'
import Dep from "./components/departments/Departments";

import EventClicks from "./components/events/EventClicks";
import CollegeEvents from "./components/events/CollegeEvents";

const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <CollegeEvents />
      <EventClicks />
      <Dep />
      {/* <Sc /> */}

      <Team />
    </div>
  );
};

export default Home;
