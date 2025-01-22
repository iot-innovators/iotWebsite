import React from "react";
import { Landing } from "./components/landing/Landing";

import Team from "./components/team/Team";

import About from "./components/about/About";
import Dep from "./components/departments/Departments";
import Contact from "./components/contact/Contact";
import EventClicks from "./components/events/EventClicks";
import CollegeEvents from "./components/events/CollegeEvents";

const Home = () => {
  return (
    // <div className="bg-[#979896] text-black"
    <div
      className="bg-[#e8e7e7] text-black"
      style={{
        // backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Landing />
      <About />
      <CollegeEvents />
      <EventClicks />
      <Dep />
      <Team />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
