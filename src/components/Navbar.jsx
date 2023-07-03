import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/imgs/logo.png";

const Navbar = () => {
  return (
    <nav className="relative mt-6 w-full">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2 basis-1/3">
          <a href="/">
            <img src={logo} alt="logo" className="h-16 w-20" />
          </a>
        </div>
        {/* navbar menu items */}
        <ul className="items-center justify-between hidden md:flex  basis-1/3">
          <li className="p-2 pt-1 px-6 text-center text-homeItem border-2 border-homeItem rounded-full hover:text-white hover:bg-homeItem">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-homeItem">
            <a href="#">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-homeItem">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-homeItem">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-homeItem">
              Contact
            </a>
          </li>
        </ul>
        {/* button menu */}
        <div className="items-center justify-end hiden md:flex basis-1/3">
          <div className=" flex items-center border-r-2 border-navBorder rounded-sm pr-3">
            <FontAwesomeIcon icon={faGlobe} />
            <a href="#" className="p-2 ">
              EN
            </a>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <button className="p-3 px-8 text-center pt-2 text-white bg-homeItem rounded-xl baseline ml-10 mr-3">
            Get Start
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
