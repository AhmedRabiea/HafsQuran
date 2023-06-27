import clsx from "clsx";
import React from "react";

const ServicesCards = (props) => {
  return (
    <div
      className={clsx(
        "w-1/4 h-56 border-2 border-homeItem rounded-md p-6",
        props.active ? "bg-homeItem text-white" : "bg-white"
      )}
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
