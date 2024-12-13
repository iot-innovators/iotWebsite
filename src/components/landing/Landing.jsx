import React from "react";
import groupPhoto from "../../assets/Photo/Group.png";
import second from "../../assets/Photo/p22.png";
import first from "../../assets/Photo/Group-3.png";

export function Landing() {
  return (
      <div className="text-white  pt-10 lg:pt-28 lg:flex px-10 md:px-24 min-h-screen ">
        <div className="md:px-20 md:justify-center md:w-[70%]">
          <h1 className="md:text-[88px] text-[50px] leading-[50px] font-bold md:leading-[90px] text-[#75BF43]">
            Ignite IoT
          </h1>
          <h1 className="md:text-[89px] text-[50px] leading-[50px] flex flex-col font-bold md:leading-[90px]">
            Innovation
            <span className="h-[2px] bg-[#75BF43] animate-pulse"></span>
          </h1>
          <h1 className="md:text-[90px] text-[50px] leading-[50px] font-bold md:leading-[90px] text-[#01264a] flex items-end">
            Together
            <span className="w-2 h-2 flex items-end bg-[white] rounded-full mb-2"></span>
          </h1>
        </div>

        <div className="mt-10 relative">
          <img src={groupPhoto} alt="Group" className="border-[8px]" />
        </div>

        <div className="relative h-max hidden lg:flex">
          <div className="flex justify-center">
            <img
              src={groupPhoto}
              alt="Group"
              className="border-[8px] xl:w-[75%] lg:w-[100%]"
            />
            <img
              src={second}
              alt="Group"
              className="border-[8px] absolute -top-10 xl:w-[35%] lg:w-[45%] -rotate-[15deg] left-1"
            />
            <img
              src={first}
              alt="Group"
              className="border-[8px] absolute xl:w-[35%] lg:w-[45%] -rotate-[15deg] -bottom-10 right-1"
            />
          </div>
        </div>

        <div className="h-12 bg-g11 left-1 bg-dot-spacing flex justify-center mt-10 mb-10"></div>

        <div className="mt-10 flex flex-col items-center ">
          <h1 className="text-3xl font-semibold">
            <strong>Who</strong> we are
          </h1>
          <p>video</p>
        </div>
      </div>
  );
}
