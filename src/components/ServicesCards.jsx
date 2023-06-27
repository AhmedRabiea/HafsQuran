import React from "react";

const ServicesCards = (props) => {
  return (
    <div
      className="w-1/4 h-56 border-2 border-homeItem rounded-md bg-white p-6"
      id="servicesCard"
    >
      <img src={props.logo} alt="ReadOnly" className="mx-auto" />
      <header class="text-center font-bold mt-3">{props.title}</header>
      <div className="text-paragraph font-normal mt-4">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCards;
