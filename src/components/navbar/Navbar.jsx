import { useState } from "react";
import Logo from "../../assets/iotlogo.png"
import SocialMedia from "../SocialMedia";
import Menu  from "../Menu";
import devCorpLogo from "../../assets/DevCorpLogo.png"


const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (    

    <header className="sticky backdrop-blur-lg shadow-md top-0 z-10 ">
      <nav className="flex   px-10 md:px-24 justify-between h-20  items-center z-10 bg-[rgba(165,167,150,0.3)]  ">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="">
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="hidden md:flex">
          <SocialMedia />
        </div>
   
      </nav>
    </header>
  );
};

export default NavBar;
