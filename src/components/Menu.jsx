import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/NavBar.module.css";
import { Menu as MenuIcon, X } from "lucide-react";
import Logo from ".././assets/iotlogo.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:block">
        <ul className={`${styles.navLists} flex gap-8`}>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/events">Events</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/team">Team</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg
          transform transition-all duration-300 ease-in-out z-50 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        {/* Logo and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <img src={Logo} alt="Logo" className="h-8" />
          <button
            onClick={toggleMenu}
            className="p-2 pr-6 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 " />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="py-4 px-6 space-y-4">
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/events" onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/team" onClick={closeMenu}>
              Team
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
