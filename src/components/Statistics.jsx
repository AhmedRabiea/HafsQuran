//styles
import "../assets/styles/Statistics.css";
import teacher from "../assets/imgs/teacher.svg";
import student from "../assets/imgs/student.svg";
import classroom from "../assets/imgs/classroom.svg";

import React, { useState } from "react";
import StatisticsCards from "./StatisticsCards";

const Statistics = () => {
  const [statisticsCards, setStatisticsCards] = useState([
    { logo: teacher, number: "430", title: "Teacher" },
    { logo: student, number: "50K", title: "Student" },
    { logo: classroom, number: "6K", title: "Classroom" },
  ]);
  return (
    <div
      className="flex gap-28 w-full px-20 py-12 mt-32 items-center justify-center text-white rounded-md"
      id="statistics"
    >
      <div className="w-full">
        <h4 className="text-white font-normal">Statistics</h4>
        <h1 className="font-medium text-4xl">
          <span className="text-homeItem">HafsQuran</span> STATISTICS
        </h1>
        <p className="font-normal mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
      </div>
      <div className="flex gap-24 rounded-lg">
        {statisticsCards.map((cards) => (
          <StatisticsCards
            cards={cards}
            logo={cards.logo}
            number={cards.number}
            title={cards.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
