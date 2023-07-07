import React, { useState } from "react";
import slider1 from "../assets/imgs/sliderbg.png";
import slider2 from "../assets/imgs/slider2.jpg";
import slider3 from "../assets/imgs/slider3.jpg";
import slider4 from "../assets/imgs/slider4.jpg";
//
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import "../assets/styles/Slider.css";

const Slider = () => {
  const [slider, setSlider] = useState([
    {
      url: slider1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting \nindustry. Lorem Ipsum has been the industry's standard dummy text \never since the 1500s.",
      header: "Read Quran Everyday \nAdd On Your Daily \nRoutine",
    },
    {
      url: slider2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting \nindustry. Lorem Ipsum has been the industry's standard dummy text \never since the 1500s.",
      header: "Read Quran Everyday \nAdd On Your Daily \nRoutine",
    },
    {
      url: slider3,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting \nindustry. Lorem Ipsum has been the industry's standard dummy text \never since the 1500s.",
      header: "Read Quran Everyday \nAdd On Your Daily \nRoutine",
    },
    {
      url: slider4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting \nindustry. Lorem Ipsum has been the industry's standard dummy text \never since the 1500s.",
      header: "Read Quran Everyday \nAdd On Your Daily \nRoutine",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };

  const nextSlide = () => {
    const isFirstSlide = currentIndex === slider.length - 1;
    const newSlide = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };
  return (
    <div className="w-full mt-4 relative group slider">
      <div
        style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
        className="w-full h-full bg-no-repeat bg-cover rounded-sm duration-300 ease-in-out flex"
      >
        <div className="text-left my-auto md:px-24 flex flex-col gap-10 px-2">
          <div className="text-2xl font-bold whitespace-pre md:text-4xl">
            {slider[currentIndex].header}
          </div>
          <div className="text-paragraph md:whitespace-pre">
            {slider[currentIndex].desc}
          </div>
          <div className="md:mt-24px flex gap-3">
            <button className="p-3 px-4 rounded-lg text-white bg-homeItem">
              Free Sessions
            </button>
            <button className="p-3 border-2 px-6 border-homeItem rounded-lg bg-white text-homeItem">
              Sign up as a Teacher
            </button>
          </div>
        </div>
      </div>
      {/*left arrow */}
      <div>
        <BsChevronCompactLeft
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] bg-black/20 left-5 rounded-full p-2 text-4xl text-white cursor-pointer"
        />
      </div>

      {/*right arrow */}
      <div>
        <BsChevronCompactRight
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] translate-y-0 translate-x-[-50%] bg-black/20 right-5 rounded-full p-2 text-4xl text-white cursor-pointer"
        />
      </div>
      <div className="flex top- text-center justify-center py-2">
        {slider.map((slider, idx) => (
          <div className="text-2xl cursor-pointer">
            <RxDotFilled
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
