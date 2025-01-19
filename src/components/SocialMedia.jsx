import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 ">
      <a href="https://www.facebook.com/iotinnovatorscommunity" target="_blank">
        <BsFacebook className="text-blue-600 hover:text-gray-400 size-6 " />
      </a>
      <a
        href="https://www.instagram.com/devcorps.iotinnovators"
        target="_blank"
      >
        <BsInstagram className="text-purple-900 size-6 hover:text-gray-400  " />
      </a>
      <a href="https://www.linkedin.com/company/iotinnovators/" target="_blank">
        <BsLinkedin className="text-blue-600 size-6 hover:text-gray-400 " />
      </a>
    </div>
  );
};

export default SocialMedia;
