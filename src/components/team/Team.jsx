import React from "react";
import Slider from "react-slick";
import "./Team.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import share from "../../assets/share.png";
import linkedIn from "../../assets/linkedIn.png";
import { GoDotFill } from "react-icons/go";
import Marquee from "react-fast-marquee";

function Team() {
  const teamMembers = [
    fb,
    ig,
    share,
    linkedIn,
    // Add more image URLs as needed
  ];

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dragable: true,
    pauseOnHover: true,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const titleProps = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    // centerMode: false,
    cssEase: "linear",
    edgeFriction: 0,
  };

  return (
    <section className="AboutSection">
   
   <div className="team-title">
        <div className="left-bar"></div>
        <Marquee speed={200} direction="left" className="">
          <p className="team-title-text">
            Team Members <span>
              <GoDotFill className="dot" />Team members
            </span>
          </p>
        </Marquee>
        <div className="right-bar"></div>
      </div>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member} alt={`Team Member ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="team-title">
        <div className="left-bar"></div>
        <Marquee speed={200} direction="right" className="">
          <p className="team-title-text">
            Team Members{" "}
            <span>
              <GoDotFill className="dot" />Team members
            </span>
          </p>
        </Marquee>
        <div className="right-bar"></div>
      </div>
    </section>
  );
}
export default Team;