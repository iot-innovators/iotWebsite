import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/iotlogo.png";
import SocialMedia from "../SocialMedia";
import Menu from "../Menu";
import devCorpLogo from "../../assets/DevCorpLogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        scrolled ? "sticky shadow-xl top-0 z-10 bg-gray-50" : "bg-white"
      } transition-all ease-in-out duration-700`}
    >
      <nav className="flex   px-10 md:px-24 justify-between h-20  items-center z-10  ">
        <div>
          <Link to ='/'>
          <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="">
          <Menu open={open} setOpen={setOpen} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
