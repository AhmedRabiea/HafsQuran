//imgs
import blogswhy from "../assets/imgs/blogswhy.png";
import blogsterms from "../assets/imgs/blogsterms.png";
import blogslearning from "../assets/imgs/blogslearning.png";
import blogslast from "../assets/imgs/blogswhy2.png";

import React, { useState } from "react";
import BlogsCards from "./BlogsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  const [blogsCards, setBlogsCards] = useState([
    {
      img: blogswhy,
      title: "Why do Muslims Fast Ramadan",
      designer: "by | Mohamed Magdy",
      desc: "Lorem Ipsum is simply dummy text of printing and typesetting industry....",
    },
    {
      img: blogsterms,
      title: "Terms and Conditions",
      designer: "by | Mohamed Magdy",
      desc: "Lorem Ipsum is simply dummy text of printing and typesetting industry....",
    },
    {
      img: blogslearning,
      title: "Learning The Holy Quran",
      designer: "by | Mohamed Magdy",
      desc: "Lorem Ipsum is simply dummy text of printing and typesetting industry....",
    },
    {
      img: blogslast,
      title: "Why do Muslims Fast Ramadan",
      designer: "by | Mohamed Magdy",
      desc: "Lorem Ipsum is simply dummy text of printing and typesetting industry....",
    },
  ]);
  return (
    <div className="mt-24 items-center justify-center text-center">
      <div>
        <h4 className="text-headers font-normal text-sm">Blogs</h4>
        <h1 className="font-bold text-4xl">
          <span className="text-homeItem">HafsQuran</span> BLOGS
        </h1>
      </div>
      {/* Buttons */}
      <div className="flex text-white mt-6 h-10 items-center w-ful justify-center">
        <a href="#" className="border-2 rounded-3xl bg-homeItem px-10 p-2">
          <button>Articals</button>
        </a>
        <a
          href="#"
          className="text-center text-buttondesc border-2 rounded-3xl bg-buttonsblogs px-10 ml-4 p-2 hover:bg-homeItem hover:text-white"
        >
          <button>Videos</button>
        </a>
        <a
          href="#"
          className="text-center text-buttondesc border-2 rounded-3xl bg-buttonsblogs px-10 p-2 ml-5 hover:bg-homeItem hover:text-white"
        >
          <button>Audio</button>
        </a>
      </div>
      <div
        id="blogsCards"
        className="flex flex-col md:flex-row gap-5 mt-16 w-full"
      >
        {blogsCards.map((items) => (
          <BlogsCards
            items={items}
            img={items.img}
            title={items.title}
            designer={items.designer}
            desc={items.desc}
          />
        ))}
      </div>
      <button className="mt-16 border-2 border-homeItem text-homeItem text-center rounded-lg w-48 h-11">
        View All Blogs
        <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
      </button>
    </div>
  );
};

export default Blogs;
