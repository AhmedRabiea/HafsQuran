import React from "react";

import "../assets/styles/Slider.css";

const Slider = () => {
  return (
    <div className="slider mt-6  rounded-md">
      <div className="text-5xl font-bold px-10 pt-20">
        <h1 className="pt-1">Read Quran Everyday</h1>
        <h1 className="pt-1">Add On Your Daily</h1>
        <h1 className="pt-1">Routine</h1>
      </div>
      <div className="px-10 w-1/2 mt-6 text-paragraph">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="mt-20 px-10">
        <a href="#" className="p-3 px-6 bg-homeItem rounded-lg text-white w-6">
          <button>Free Sessions</button>
        </a>
        <a
          href="#"
          className="ml-3 p-3 px-6 border-2 border-homeItem rounded-lg text-homeItem"
        >
          <button>Sign up as a Teacher</button>
        </a>
      </div>
    </div>
  );
};

export default Slider;
