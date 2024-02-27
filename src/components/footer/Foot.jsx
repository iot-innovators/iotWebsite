import React from "react";
import "./Foot.css"
import Logo from "../../assets/iotlogo.png"
import devCorpLogo from "../../assets/DevCorpLogo.png"
import heraldLogo from "../../assets/heraldLogo.png"
import fb from "../../assets/fb.png"
import ig from "../../assets/ig.png"
import share from "../../assets/share.png"
import linkedIn from "../../assets/linkedIn.png"


function Foot() {
  return (
    <footer>
        <div className="logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="allFootItems">
          <div className="allLinks">
            <ul className="footLinks">
              <li><a href="main.jsx">Home</a></li>
              <li><a href="main.jsx">Events</a></li>
              <li><a href="main.jsx">Gallery</a></li>
              <li><a href="main.jsx">About Us</a></li>
              <li><a href="main.jsx">Contact Us</a></li>
            </ul>
            <ul className="socialLinks">
              <li><a href=""><img src={fb} alt="Facebook" /></a></li>
              <li><a href=""><img src={ig} alt="Instagram" /></a></li>
              <li><a href=""><img src={share} alt="Share" /></a></li>
              <li><a href=""><img src={linkedIn} alt="LinkedIn" /></a></li>
            </ul>
          </div>
          
            <ul className="logos">
              <li><a href=""><img src={devCorpLogo} alt="Devcorps" /></a></li>
              <li><a href=""><img src={heraldLogo} alt="Herald" /></a></li>
            </ul>

          
        </div>
    </footer>
  );
}

export default Foot;
