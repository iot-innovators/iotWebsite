import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import groupPhoto from "../../assets/Photo/Group.png";
import second from "../../assets/Photo/p22.png";
import first from "../../assets/Photo/Group-3.png";

export function Landing() {
  return (
    <div className="text-white pt-10 lg:pt-28 lg:flex px-5 md:px-16 min-h-screen flex-wrap">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <motion.div
          className="md:px-10 md:justify-center md:w-[70%]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="md:text-[70px] text-[50px]  lg:text-[90px]  leading-[50px] font-bold sm:text-[80px] sm:leading-[90px] md:leading-[90px] text-[#75BF43]">
            Ignite IoT
          </h1>
          <h1 className="md:text-[70px] lg:text-[90px]  text-[50px] leading-[50px] flex flex-col font-bold sm:text-[80px] sm:leading-[90px] md:leading-[90px] text-[#01264a]">
            Innovation
            <motion.span
              className="h-[2px] bg-[#75BF43] animate-pulse"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 1 }}
            ></motion.span>
          </h1>
          <h1 className="md:text-[70px]  lg:text-[90px] text-[50px] leading-[50px] sm:text-[80px] sm:leading-[90px] font-bold md:leading-[90px] text-[#75BF43] flex items-end">
            Together
            <motion.span
              className="w-2 h-2 flex items-end bg-[#01264A] rounded-full mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            ></motion.span>
          </h1>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="mt-10 relative lg:w-[30%] md:w-full flex justify-center "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={groupPhoto} alt="Group" className="border-[8px] lg:hidden" />
        </motion.div>

        {/* Overlapping Images Section */}
        <motion.div
          className="relative hidden lg:flex justify-center mt-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={groupPhoto}
            alt="Group"
            className="border-[8px] xl:w-[75%]  lg:w-[100%]"
          />
          <motion.img
            src={second}
            alt="Second"
            className="border-[8px] absolute -top-20 xl:w-[35%] lg:w-[45%] -rotate-[15deg] left-1"
            
          />
          <motion.img
            src={first}
            alt="First"
            className="border-[8px] absolute xl:w-[35%] lg:w-[45%] -rotate-[15deg] -bottom-10 right-1"
        
          />
        </motion.div>
      </div>

      {/* Dotted Section */}
      <motion.div
        className="h-12 bg-g11 bg-dot-spacing flex justify-center mt-24 mb-10 w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* "Who We Are" Section */}
      <motion.div
        className="mt-10 flex flex-col items-center w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <h1 className="text-3xl font-semibold">
          <strong>Who</strong> we are
        </h1>
        <p>video</p> */}
      </motion.div>
    </div>
  );
}
