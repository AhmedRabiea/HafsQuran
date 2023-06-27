import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/imgs/logo.png";

const Navbar = () => {
  return (
    <nav className="relative container mt-6 w-full">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2 basis-1/3">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {/* navbar menu items */}
        <ul className="hidden md:flex space-x-6 basis-1/3">
          <li>
            <a
              href="#"
              className="p-2 pt-1 px-6 text-center text-homeItem border-2 border-homeItem rounded-full hover:text-white hover:bg-homeItem"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-homeItem">
              About
            </a>
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
          <a
            href="#"
            className="p-3 px-6 pt-2 text-center text-white bg-homeItem rounded-xl baseline ml-10"
          >
            Get Start
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
