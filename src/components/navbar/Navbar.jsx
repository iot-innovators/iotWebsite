import React from "react";
import "./Navbar.css"
import Logo from "../../assets/iotlogo.png"

function NavBar() {
  return (
    <header>
        <nav class="navbar">
        <ul class="navlist">
                <li><a href="App.jsx">Home</a></li>
                <li><a href="Events.jsx">Events</a></li>
                <li><a href="Gallery.jsx">Gallery</a></li>
            </ul>
            {/* <img src={Logo} alt="logo"/> */}
            <ul class="navlist">
                <li><a href="About.jsx">About Us</a></li>
                <li><a href="Contact.jsx">Contact Us</a></li>
            </ul>
            <div className="logoDiv">
            <img src={Logo} alt="logo"/>
            </div>
        </nav>
    </header>
  );
}

export default NavBar;
