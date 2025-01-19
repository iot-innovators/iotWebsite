import React from "react";
import styles from "../css/NavBar.module.css";

const Menu = () => {
  return (
    <div>
      <ul className={`${styles.navLists} flex gap-4`}>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Events</li>
        <li className="cursor-pointer">Team</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>
    </div>
  );
};

export default Menu;
