import React from "react";
import Logo from "../.././assets/iot.png";
import devCorps from "../.././assets/DevCorp.png";
import styles from "./About.module.css";

function About() {
  return (
    <div className="">
      <div className={`${styles.about} cursor-pointer`}>
        <h1 className="text-center mb-12 font-bold text-4xl">About Us</h1>
      </div>
      <div className="flex justify-between px-12 mb-5">
        <div className="flex items-center gap-4 text-center justify-center">
          <img src={Logo} alt="logo" className="w-72 h-50" />
          <div className="border border-gray-400 h-52"></div>
          <img src={devCorps} alt="logo" className="w-72 h-50" />
        </div>
        <p className="w-1/2 leading-8 text-[18px]">
          The IOT community is a vibrant and supportive platform for students
          and enthusiasts interested in embedded systems and related fields. Our
          goal is to bring together gemlike-minded individuals from diverse
          backgrounds and skill levels, providing them with opportunities to
          learn, collaborate, and innovate. We encourage a culture of learning,
          creativity, and collaboration, where members engage in exciting
          projects. The IOT community is exclusively designed to empower and
          support Herald College students in their learning and growth journey.
          Herald students can enhance their skills, expand their knowledge, and
          make a significant impact in the field of IoT.
        </p>
      </div>
      <hr className=" mt-10 mb-5" />
    </div>
  );
}

export default About;
