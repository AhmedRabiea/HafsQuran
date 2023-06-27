import React from "react";

const StatisticsCards = (props) => {
  return (
    <div className="text-center  px-24">
      <img
        src={props.logo}
        alt="teacher"
        className="bg-transparent opacity-100 bg-no-repeat"
      />
      <h1 className="text-3xl font-bold mt-5">{props.number}</h1>
      <p className="text-xs font-normal mt-1">{props.title}</p>
    </div>
  );
};

export default StatisticsCards;
