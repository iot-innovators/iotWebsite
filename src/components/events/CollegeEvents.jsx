import React from "react";
import ev from "./EventColleges";
import { Link } from "react-router-dom";
import SingleDetails from "./SingleDetails";
import "./Events.css";

const CollegeEvents = () => {
  return (
    <div className="">
      <div className="collegeEvents">
        <h1 className="text-center font-bold text-4xl cursor-pointer">
          Events
        </h1>
        <div className="flex gap-10 justify-center flex-wrap mt-10">
          {ev.map((e, i) => (
            <div
              key={i}
              className="px-7 w-96 shadow-md py-5 hover:shadow-2xl cursor-pointer transition-all ease-in-out duration-300"
            >
              <h3 className="text-center font-bold text-xl">{e.name}</h3>
              <p className="text-[#302f2f] text-center text-sm m-2">
                {e.slogan}
              </p>
              <img className="rounded" src={e.poster} />
              <Link
                to={`/event/${e.index}`}
                className="bg-transparent border mt-5 border-black px-5 py-1 rounded flex justify-center hover:bg-gray-50 hover:border-gray-600"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-14 mb-7" />
    </div>
  );
};

export default CollegeEvents;
