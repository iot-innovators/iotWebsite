import React from "react";
import Dep from "./Dep.json";

const Departments = () => {
  return (
    <>
    <div className="mt-10">

      <h1 className="flex justify-center font-bold text-4xl text-white">
        Departments
      </h1>
      <div className="flex fl gap-6 px-10 md:px-24 text-white  flex-glow flex-wrap  justify-between pt-10 ">
        {Dep.map((de, i) => (
          <div key={i} className=" lg:w-[23%] sm:w-[45%] w-full bg-[#515754]">
            <div className="p-5">
              <h1>{de.title}</h1>
              {de.image && <img src={de.image} alt={de.name} />}
              <h2>{de.name}</h2>
              <p>{de.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Departments;
