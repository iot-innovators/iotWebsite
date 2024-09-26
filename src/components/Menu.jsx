import { memo } from "react";
import { Link } from "react-router-dom";

// Component for menu items to enhance reusability
const MenuItems = () => (
    <ul className="flex flex-col gap-8  ml-10 mt-10">
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
const WebNav = () => (
    <div className="shadow-lg rounded-3xl bg-[#519F80] ">
        <ul className="flex  gap-8  rounded-3xl px-10 py-2 text-gray-300">
            <li className="hover:text-white .">
                <Link to="/home">Home</Link>
            </li>

            <li className="hover:text-white .">

                <Link to="/about-us">About Us</Link>
            </li>
            <li className="hover:text-white .">

                <Link to="/event">Event</Link>
            </li>
            <li className="hover:text-white .">

                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </div>
);

const Menu = memo(({ open, setOpen }) => {

    return (
        <div className=" " >
            {/* Mobile Menu Toggle */}
            <div className="relative md:hidden" onClick={() => setOpen((prev) => !prev)}>
                <div className={`h-[2px] w-7  bg-black absolute right-0 ${open ? 'rotate-45' : 'top-2'}`} ></div>
                <div className={`h-[2px] w-7  bg-black absolute  right-0  ${open ? 'opacity-0' : ''}`} ></div>
                <div className={`h-[2px] w-7  bg-black absolute right-0  ${open ? '-rotate-45' : '-top-2'}`} ></div>
            </div>
            <div className="hidden md:flex">
                <WebNav />
            </div>

            {open && (
                <div className="fixed top-20 left-0 text-white h-[calc(100vh-80px)] w-full z-50 bg-pr flex flex-col ">
                    <MenuItems />
                </div>
            )}
        </div>
    );
});

export default Menu;
