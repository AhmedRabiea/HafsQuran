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
      <div className="h-auto p-4 md:p-0 md:h-96 flex flex-col md:flex-row md:gap-40 md:items-center md:justify-between w-full">
        <div className="flex flex-row gap-5 md:gap-0 md:block md:basis-1/3 md:ml-4 md:px-8">
          <img src={footerlogo} alt="hafsquran" className="basis-1/3" />
          <p className="text-sm text-white font-normal mt-10 basis-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="mt-10 md:mt-0 text-center md:text-left md:basis-1/3">
          <h1 className="text-white font-normal text-xl">Quick Links</h1>
          <ul className="flex flex-row gap-5 md:gap-0 justify-center md:flex-col mt-3 text-white font-normal text-base">
            <li className="pt-2">Home</li>
            <li className="pt-2">About Us</li>
            <li className="pt-2">Blogs</li>
            <li className="pt-2">Pricing</li>
            <li className="pt-2">Contact Us</li>
          </ul>
        </div>
        <div className="mt-10 md:mt-0 text-center md:text-left md:basis-1/3">
          <h1 className="text-xl text-white font-normal">
            HafsQuran Newsletter
          </h1>
          <div className="flex justify-center md:justify-normal gap-3 mt-6">
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
          <div className="flex justify-center md:justify-normal text-white p-3 mt-2 md:mt-7">
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
      <div className="mt-10 md:mt-0 flex justify-center items-center text-white font-normal text-sm">
        <div className="border-t-2  border-white md:w-1/3 py-3 flex items-center justify-center">
          <FaCopyright className="pr-1" />
          <p>2022 Copy Rights Reserved. Designed By Beltzo</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
