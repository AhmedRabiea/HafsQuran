import React from "react";
import { FaAudioDescription, FaBookOpen, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//imgs
import about from "../assets/imgs/about.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="mt-24 mx-12 md:flex">
      <div className="md:basis-1/2 brightness-50">
        <img src={about} alt="aboutHafsQuran" />
      </div>
      <div className="flex flex-col basis-1/2">
        <span className="text-headers font-norma mt-2">About Us</span>
        <h1 className="text-4xl font-bold">
          ABOUT <span className="text-homeItem">HafsQuran</span>
        </h1>
        <p className="text-paragraph mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <ul className="mt-8 font-normal">
          <li className="flex items-center">
            <li className="pr-1">
              <FaBookOpen />
            </li>
            <li>Reading Articals</li>
          </li>
          <li className="flex items-center">
            <li className="pr-1">
              <FaYoutube />
            </li>
            <li>Watching Videos</li>
          </li>
          <li className="flex items-center">
            <li className="pr-1">
              <FaAudioDescription />
            </li>
            <li>Listening Audios</li>
          </li>
        </ul>

        {/* button */}
        <button className="p-3 px-6 pt-2 border-2 border-homeItem rounded-lg mt-5 h-11 w-60 text-homeItem">
          Know More About Us
          <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
        </button>
      </div>
    </div>
  );
};

export default About;
