import React from "react";

import footerlogo from "../assets/imgs/footerlogo.png";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-footerbg mb-36 mt-40">
      <div className="h-96 flex gap-40 items-center justify-between w-full">
        <div className="basis-1/3 ml-4 px-8">
          <img src={footerlogo} alt="hafsquran" />
          <p className="text-sm text-white font-normal mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="basis-1/3">
          <h1 className="text-white font-normal text-xl">Quick Links</h1>
          <ul className="mt-3 text-white font-normal text-base">
            <li className="pt-2">Home</li>
            <li className="pt-2">About Us</li>
            <li className="pt-2">Blogs</li>
            <li className="pt-2">Pricing</li>
            <li className="pt-2">Contact Us</li>
          </ul>
        </div>
        <div className="basis-1/3">
          <h1 className="text-xl text-white font-normal">
            HafsQuran Newsletter
          </h1>
          <div className="flex gap-3 mt-6">
            <input
              type="email"
              id="email"
              className="border-2 border-footerinput rounded-md text-sm font-normal p-2 bg-inherit"
              placeholder="Enter your email address"
              required
            />
            <a
              href="#"
              className="bg-white mr-4  p-2 rounded-md text-sm font-normal "
            >
              <button>Subscribe</button>
            </a>
          </div>
          <p className="text-white text-sm font-normal mt-5">
            By Subscribing, you agree to our Privacy Policy
          </p>
          <div className="flex text-white p-3 mt-7">
            <span className="p-1.5 border-2 rounded-md border-white mx-2">
              <FaFacebook />
            </span>
            <span className="p-1.5 border-2 rounded-md border-white mx-2">
              <FaInstagram />
            </span>
            <span className="p-1.5 border-2 rounded-md border-white mx-2">
              <FaYoutube />
            </span>
            <span className="p-1.5 border-2 rounded-md border-white mx-2">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white font-normal text-sm">
        <div className="border-t-2  border-white w-1/3 py-3 flex items-center justify-center">
          <FaCopyright className="pr-1" />
          <p>2022 Copy Rights Reserved. Designed By Beltzo</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
