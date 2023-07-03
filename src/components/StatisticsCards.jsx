import React from "react";

const StatisticsCards = (props) => {
  return (
    <div className="text-center">
      <img src={props.logo} alt="teacher" />
      <h1 className="text-3xl font-bold mt-5">{props.number}</h1>
      <p className="text-xs font-normal mt-1">{props.title}</p>
    </div>
  );
};

export default StatisticsCards;
