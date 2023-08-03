import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FaTimes, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Blog", link: "/" },
    { title: "Pricing", link: "/" },
    { title: "Contact", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="relative mt-6 w-full">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2 basis-1/3">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-20 ml-2 lg:ml-0 object-contain"
            />
          </a>
        </div>

        {/* navbar menu items */}
        <ul className="items-center justify-between hidden lg:flex  basis-1/3">
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
        <div className="items-center justify-end hidden lg:flex basis-1/3">
          <div className=" flex items-center border-r-2 border-navBorder rounded-sm pr-3">
            <FontAwesomeIcon icon={faGlobe} />
            <a href="#" className="p-2 ">
              EN
            </a>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <Link
            to="register"
            onClick={() => props.setShowModal(true)}
            onClose={() => props.setShowModal(false)}
            className="p-3 px-8 text-center pt-2 text-white bg-homeItem rounded-xl baseline ml-10 mr-3"
          >
            Get Start
          </Link>
        </div>

        {/* hamburger icon */}
        <div className=" mr-2 flex gap-4 lg:hidden">
          <button
            onClick={() => props.setShowModal(true)}
            onClose={() => props.setShowModal(false)}
            className="p-3 rounded-lg text-gray-300 bg-homeItem hover:text-white items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <FaUser />
          </button>
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex p-3 rounded-lg text-gray-300 bg-homeItem hover:text-white items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <span className="sr-only">open main menu</span>
            {open == true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-homeItem m-1 rounded-lg">
            {navLinks.map((link) => (
              <a className="block text-white bg-homeItem hover:bg-blue-400 py-2 px-3 rounded-md text-base font-medium">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
