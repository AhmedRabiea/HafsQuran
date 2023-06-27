import React from "react";
import ServicesCards from "./ServicesCards";

import readonly from "../assets/imgs/readonly.png";
import tajweed from "../assets/imgs/tajweed.png";
import memorization from "../assets/imgs/memorization.png";
import arabiclanguage from "../assets/imgs/arabiclanguage.png";

const ServicesData = () => {
  const services = [
    {
      id: 1,
      title: "Read Only",
      logo: readonly,
      desc: "You can if you wish only recite with a specialist",
    },
    {
      id: 2,
      title: "Tajweed",
      logo: tajweed,
      desc: "Learn pronunciations rulings used by the holders of Ijazah",
    },
    ,
    {
      id: 3,
      title: "Memorization",
      logo: memorization,
      desc: "Memorization sessions of the Noble Qur’an with proper rulings and pronunciation.",
    },
    {
      id: 4,
      title: "Arabic Language",
      logo: arabiclanguage,
      desc: "Learn Arabic from the alphabet through the grammatical rules To end up speaking Arabic fluently.",
    },
  ];
  return (
    <div className="mt-32 mx-auto text-center">
      <div>
        <h4 className="text-headers font-normal">Services</h4>
        <h1>
          <span className="text-homeItem">HafsQuran</span> SERVICES
        </h1>
      </div>
      <div className="flex gap-7 mt-14">
        {services.map((items) => (
          <ServicesCards
            key={items.id}
            item={items}
            title={items.title}
            logo={items.logo}
            desc={items.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesData;
