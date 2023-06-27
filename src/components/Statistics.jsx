//styles
import "../assets/styles/Statistics.css";
import teacher from "../assets/imgs/teacher.png";
import student from "../assets/imgs/student.png";
import classroom from "../assets/imgs/classroom.png";

import React, { useState } from "react";
import StatisticsCards from "./StatisticsCards";

const Statistics = () => {
  const [statisticsCards, setStatisticsCards] = useState([
    { logo: teacher, number: "430", title: "Teacher" },
    { logo: student, number: "50K", title: "Student" },
    { logo: classroom, number: "6K", title: "Classroom" },
  ]);
  return (
    <div className="flex mt-32 h-72 text-white rounded-md" id="statistics">
      <div className="basis-1/2 p-20">
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
      <div className="basis-1/2 flex items-center rounded-lg">
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
