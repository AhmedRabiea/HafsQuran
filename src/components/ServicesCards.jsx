import clsx from "clsx";
import React from "react";

const ServicesCards = (props) => {
  return (
    <div
      className={clsx(
        "md:w-1/4 border-2 border-homeItem m-2 rounded-md p-6",
        props.active ? "bg-homeItem text-white" : "bg-white"
      )}
      id="servicesCard"
    >
      <img src={props.logo} alt="ReadOnly" className="mx-auto" />
      <header class="text-center font-bold mt-3">{props.title}</header>
      <div
        className={clsx(
          "text-paragraph font-normal mt-4",
          props.active ? "text-white" : "text-paragraph"
        )}
      >
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCards;
