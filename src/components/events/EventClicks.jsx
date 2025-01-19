import React, { useEffect, useState } from "react";
import one from "../../assets/Events/One.png";
import two from "../../assets/Events/Two.png";
import three from "../../assets/Events/Three.png";
import four from "../../assets/Events/Four.png";
import five from "../../assets/Events/Five.png";
import six from "../../assets/Events/Six.png";
import seven from "../../assets/Events/Seven.png";
import ten from "../../assets/Events/Eight.png";
import nine from "../../assets/Events/Nine.png";
import eight from "../../assets/Events/Ten.png";
import eleven from "../../assets/Events/Eleven.png";
import twelve from "../../assets/Events/Twelve.png";
import fourteen from "../../assets/Events/Fourteen.png";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import "./Events.css";

const eventPhotos = [
  { src: one },
  { src: four },
  { src: five },
  { src: six },

  { src: eight },
  { src: nine },
];

const EventClicks = () => {
  // This section is for carousal if want to use
  //   const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % eventPhotos.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   const nextImage = () => {
  //     setIndex((prevIndex) => (prevIndex + 1) % eventPhotos.length);
  //   };

  //   const previousImage = () => {
  //     setIndex((prevIndex) =>
  //       prevIndex === 0 ? eventPhotos.length - 1 : prevIndex - 1
  //     );
  //   };

  return (
    <div className="eventClicks mt-20 mb-10 text-center">
      <h1 className="cursor-pointer font-bold text-4xl mb-10 ">Event Clicks</h1>

      {/* Carousal Section */}
      {/* <div className="relative w-full max-w-3xl mx-auto">
        <img
          src={eventPhotos[index].src}
          alt={`Event ${index + 1}`}
          className="w-full h-auto object-cover rounded-lg"
        />
        <button
          onClick={previousImage}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <BiLeftArrowCircle />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <BiRightArrowCircle />
        </button>
      </div> */}

      <div>
        <div className="flex flex-wrap gap-5  justify-center">
          {eventPhotos.map((ep, i) => (
            <div key={i} className="w-96 h-auto ">
              <img
                src={ep.src}
                className="mt-2 cursor-pointer  rounded-md shadow-lg hover:transform hover:-translate-y-4  hover:shadow-2xl transition-all ease-in-out duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-20" />
    </div>
  );
};

export default EventClicks;
