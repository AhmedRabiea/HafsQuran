import React from "react";

import rate from "../assets/imgs/blogsicon.png";

const BlogsCards = (props) => {
  return (
    <div className="w-1/4 h-56 rounded-lg bg-white">
      <img
        src={props.img}
        alt=""
        className="rounded-t-lg  w-full object-cover"
      />

      <header className="mt-4">
        <p className="text-base font-bold">{props.title}</p>
        <p className="text-designer text-sm mt-1">{props.designer}</p>
      </header>
      <div className="mt-3 text-sm">
        <p className="text-blogsparagraph">{props.desc}</p>
      </div>
      <footer className="mt-5 text-sm flex justify-between">
        <a href="#" className="text-homeItem">
          Read More
        </a>
        <img src={rate} alt="rate" />
      </footer>
    </div>
  );
};

export default BlogsCards;
