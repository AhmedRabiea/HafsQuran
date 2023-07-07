import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import teachers from "../assets/imgs/teachers.png";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Teachers = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 bg-teachersbg md:p-24 mt-28 rounded-xl">
      <div className="md:basis-1/3 ">
        <img
          src={teachers}
          alt="teacher"
          className="w-full px-4 bg-white md:bg-inherit md:px-0 md:w-auto"
        />
        <div className="flex items-center justify-between mt-4 m-2 md:m-0">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-center text-white p-4 bg-black/20 rounded-lg"
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-center text-white p-4 bg-homeItem rounded-lg"
          />
        </div>
      </div>
      <div className="md:basis-2/3 mt-5 md:mt-0">
        <p className="text-sm text-headers font-normal">Teachers</p>
        <h1 className="text-4xl">
          <span className="text-homeItem">HafsQuran</span> TEACHERS
        </h1>
        <h1 className="mt-14 text-lg font-bold">
          Mohamed Abdelrhman Ahmed Abdelrhman
        </h1>
        <p className="text-sm text-paragraph">Executive director</p>
        <p className="text-base text-paragraph mt-6 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h2 className="text-base font-noraml mt-5 text-listteacher">
          I Can Teach
        </h2>
        <ul className="p-1 text-paragraph">
          <li className="flex items-center">
            <li className="pr-1">
              <FaCheckCircle className="text-homeItem" />
            </li>
            <li>Arabic Language</li>
          </li>
          <li className="flex items-center">
            <li className="pr-1">
              <FaCheckCircle className="text-homeItem" />
            </li>
            <li>Tajweed</li>
          </li>
          <li className="flex items-center">
            <li className="pr-1">
              <FaCheckCircle className="text-homeItem" />
            </li>
            <li>Quran correct pronunciation</li>
          </li>
          <li className="flex items-center">
            <li className="pr-1">
              <FaCheckCircle className="text-homeItem" />
            </li>
            <li>Quran memorization</li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teachers;
