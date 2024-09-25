import { useState } from "react";
import { Link } from "react-router-dom";

// Component for menu items to enhance reusability
const MenuItems = () => (
    <ul className="flex flex-col gap-8 overflow-hidden ml-10 mt-10">
        <li className="border-b-[1px] border-b-gray-300 border-opacity-45 pb-5">
            <Link to="/home">Home</Link>
        </li>
        <li className="border-b-[1px] border-b-gray-300 border-opacity-45 py-5">
            <Link to="/about-us">About Us</Link>
        </li>
        <li className="border-b-[1px] border-b-gray-300 border-opacity-45 py-5">
            <Link to="/event">Event</Link>
        </li>
        <li className="border-b-[1px] border-b-gray-300 border-opacity-45 py-5">
            <Link to="/projects">Projects</Link>
        </li>
    </ul>
);

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Mobile Menu Toggle */}
            <div className=" relative" onClick={() => setOpen((prev) => !prev)}>
                    <div className={`h-[2px] w-7  bg-black absolute  ${open ? 'rotate-45' : 'top-2'}`} ></div>
                    <div className={`h-[2px] w-7  bg-black absolute   ${open ? 'opacity-0' : ''}`} ></div>
                    <div className={`h-[2px] w-7  bg-black absolute  ${open ? '-rotate-45' : '-top-2'}`} ></div>
                </div>

            {open && (
                <div className="absolute top-20 left-0 text-white h-[calc(100vh-80px)] w-full z-10 bg-pr flex flex-col">
                    <MenuItems />
                </div>
            )}
        </div>
    );
}

export default Menu;
