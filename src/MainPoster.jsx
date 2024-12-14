import React, { useState, useEffect } from "react";
import tech from "./assets/Photo/TECH.jpg";
import { GiCrossMark } from "react-icons/gi";
import { Pointer } from "lucide-react";

const WelcomePopup = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Disable scrolling when the popup is shown
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
    // Cleanup function to reset overflow on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const closePopup = () => {
    setShow(false);
  };

  return (
    <div>
      {/* Popup */}
      {show && (
        <div className="fixed inset-0 z-50 bg-opacity-40 flex items-center justify-center bg-[#807f7ca1] px-5 md:px-24">
          <div className="bg-white w-[100%] lg:max-w-lg  md:max-w-md sm:max-w-sm rounded-lg p-1  text-center shadow-lg relative">
            <img src={tech} alt="" className="relative" />

            <GiCrossMark
              className="absolute -top-2  -right-3 border size-7 p-1 rounded-3xl bg-white cursor-pointer "
              onClick={closePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePopup;
