//imgs
import blogswhy from "../assets/imgs/blogswhy.png";
import blogsterms from "../assets/imgs/blogsterms.png";
import blogslearning from "../assets/imgs/blogslearning.png";
import blogslast from "../assets/imgs/blogswhy2.png";

import React, { useState } from "react";
import BlogsCards from "./BlogsCards";

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
    <div className="mt-24 flex flex-col">
      <div className="text-center">
        <h4 className="text-headers font-normal text-sm">Blogs</h4>
        <h1 className="font-bold text-4xl">
          <span className="text-homeItem">HafsQuran</span> BLOGS
        </h1>
      </div>
      {/* Buttons */}
      <div className="flex mx-auto text-white mt-6 w-1/3 h-10">
        <a href="#" className="border-2 rounded-3xl bg-homeItem px-10 p-2">
          <button>Articals</button>
        </a>
        <a
          href="#"
          className="text-center text-buttondesc border-2 rounded-3xl bg-buttonsblogs px-10 ml-4 p-2"
        >
          <button>Videos</button>
        </a>
        <a
          href="#"
          className="text-center text-buttondesc border-2 rounded-3xl bg-buttonsblogs px-10 p-2 ml-5 "
        >
          <button>Audio</button>
        </a>
      </div>
      <div id="blogsCards" className="flex gap-5 mt-16">
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
      <footer className="mt-64 text-center">
        <a
          href="#"
          className="border-2 border-homeItem text-homeItem p-3 px-10 rounded-lg w-48 h-11"
        >
          <button>View All Blogs</button>
        </a>
      </footer>
    </div>
  );
};

export default Blogs;
