import React from "react";
import ev from "./EventColleges";
import { Link, useParams } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";

const SingleDetails = () => {
  const { id } = useParams();
  const data = ev[id];

  return (
    <div>
      <Link to={"/"}>
        <BiLeftArrowAlt className="w-14 h-7 " />
      </Link>
      <div className="px-7   py-5 cursor-pointer ">
        <h3 className="text-center font-bold text-xl">{data.name}</h3>
        <p className="text-gray-400 text-center text-sm m-2">{data.slogan}</p>
        <div className="flex justify-center mt-5 mb-5">
          <img className="rounded w-1/2" src={data.poster} />
        </div>
        <p className="text-center m-2 w-full mt-6">{data.description}</p>
      </div>
    </div>
  );
};

export default SingleDetails;
