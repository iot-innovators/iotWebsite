import React, { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import Logo from "../.././assets/iot.png";
import devCorps from "../.././assets/DevCorp.png";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const footerLists = [
  {
    index: 0,
    name: "Home",
  },
  {
    index: 1,
    name: "About Us",
  },
  {
    index: 2,
    name: "Events",
  },
  {
    index: 3,
    name: "Team",
  },
  {
    index: 4,
    name: "Contact Us",
  },
];

const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();

  return (
    <footer className="bg-gray-100 border border-t shadow-md">
      <div className="p-10 flex justify-between ">
        <div className="flex items-center gap-4 text-center justify-center">
          <img src={Logo} alt="logo" className="w-40 h-20" />
          <div className="border border-gray-400 h-32"></div>
          <img src={devCorps} alt="logo" className="w-40 h-20" />
        </div>

        {/* Short url */}
        <div>
          <h1 className="font-bold text-xl">Short Links</h1>
          <ul className={`flex flex-col gap-3 mt-3`}>
            {footerLists.map((f, i) => (
              <li key={f.index} className="cursor-pointer hover:text-green-400">
                {f.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h1 className="font-bold text-xl">Contact Information</h1>
          <div className="mt-3 text-center">
            <div className="flex items-center gap-2">
              <IoLocation className="w-5 h-5 text-green-500 hover:text-green-600 cursor-pointer" />
              <p className="cursor-pointer hover:text-green-600">
                Bhagwati Bahal Road, Naxal, Kathmandu
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 ">
              <MdEmail className="w-5 h-5  text-green-500 hover:text-green-600 cursor-pointer" />
              <p className="cursor-pointer hover:text-green-600">
                iot.innovators@heraldcollege.edu.np
              </p>
            </div>
          </div>
        </div>

        {/* Social Media section */}
        <div>
          <h1 className="font-bold text-xl">Connect With Us</h1>
          <div className="flex flex-col gap-2  mt-2">
            <div className="flex items-center gap-3">
              <Link
                className="flex items-center gap-3"
                to={"https://www.linkedin.com/company/iotinnovators/"}
              >
                <FaLinkedin color="blue" className="cursor-pointer text-xl" />
                <span className="cursor-pointer font-bold  hover:text-green-600">
                  Follow us on LinkedIn
                </span>
              </Link>
            </div>
            <div className="">
              <Link
                className="flex items-center gap-3"
                to={"https://www.instagram.com/devcorps.iotinnovators"}
              >
                <FaInstagram
                  color="purple"
                  className="cursor-pointer text-xl"
                />
                <span className="cursor-pointer font-bold  hover:text-green-600">
                  Follow us on Instagram
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                className="flex items-center gap-3"
                to={"https://www.tiktok.com/@iotinnovators"}
              >
                <FaTiktok color="black" className="cursor-pointer text-xl" />
                <span className="cursor-pointer font-bold  hover:text-green-600">
                  Follow us on Tiktok
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                className="flex items-center gap-3"
                to={"https://www.facebook.com/iotinnovatorscommunity"}
              >
                <FaFacebook color="blue" className="cursor-pointer text-xl" />
                <span className="cursor-pointer font-bold  hover:text-green-600">
                  Follow us on Facebook
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-3   border border-t border-t-gray-300 w-full">
        &copy; Iot Innovators &bull; All right reserved {year}
      </p>
    </footer>
  );
};

export default Footer;
