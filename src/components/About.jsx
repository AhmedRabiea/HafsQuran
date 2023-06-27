import React from "react";
import {
  FaAudioDescription,
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaCheckCircle,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";

//imgs
import about from "../assets/imgs/about.png";

const About = () => {
  return (
    <div className="mt-24 mx-12 flex">
      <div className="basis-1/2 brightness-50">
        <img src={about} alt="aboutHafsQuran" />
      </div>
      <div className="flex flex-col basis-1/2">
        <span className="text-headers font-normal">About Us</span>
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
        <a
          href="#"
          className="p-3 px-6 pt-2 border-2 border-homeItem rounded-lg mt-5 w-56 h-11 text-homeItem"
        >
          <button>Know More About Us</button>
        </a>
      </div>
    </div>
  );
};

export default About;