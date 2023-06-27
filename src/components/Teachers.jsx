import teachers from "../assets/imgs/teachers.png";

import React from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaCheckCircle,
  FaRegCheckCircle,
} from "react-icons/fa";

const Teachers = () => {
  return (
    <div className="flex bg-teachersbg p-24 mt-28 rounded-xl">
      <div className="basis-1/2">
        <img src={teachers} alt="teacher" />
        <div className="flex items-center ">
          <FaArrowCircleLeft />
          <FaArrowCircleRight />
        </div>
      </div>
      <div className="basis-1/2">
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
