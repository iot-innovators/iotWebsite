import React from "react";
import Logo from "../../assets/iotlogo.png"
import SocialMedia from "../SocialMedia";
import Menu from "../Menu";


function NavBar() {
  return (
    
<header className="sticky backdrop-blur bg-background/40 top-0 z-50">
  <nav className="flex mx-12 md:mx-24 justify-between h-20 items-center z-10">
    <div>
      <img src={Logo} alt="logo" />
    </div>
   <div>
    <Menu/>
   </div>
    <div className="hidden">
      <SocialMedia />
    </div>
  </nav>
</header>


  );
}

export default NavBar;
