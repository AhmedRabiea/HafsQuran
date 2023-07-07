import mail from "../assets/imgs/contactmail.png";
import visit from "../assets/imgs/contactvisit.png";
import call from "../assets/imgs/contactcall.png";
import chart from "../assets/imgs/chart.png";

import React, { useState } from "react";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [contactCards, setContactCards] = useState([
    {
      logo: mail,
      title: "Chat With Us",
      desc: "Speak to our friendly team",
      communicationMethod: "Hafsquran@support.com",
    },
    {
      logo: visit,
      title: "Visit Us",
      desc: "Visit our office HQ",
      communicationMethod:
        "TIEC, Smart-Village, Building (B5). Cairo-Alexandria Desert Road, Giza, Egypt",
    },
    {
      logo: call,
      title: "Call Us",
      desc: "Sun - Fri From 8am to 5pm.",
      communicationMethod: "+201063103132",
    },
  ]);
  return (
    <div className="flex-col mt-28 text-center">
      <div className="p-1">
        <p className="text-sm font-normal text-headers">Contact US</p>
        <h1 className="text-2xl md:text-4xl font-bold">
          We'd Love to Hear From You
        </h1>
        <p className="text-sm font-normal mt-1">Chat to our friendly team</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-16">
        {contactCards.map((items) => (
          <ContactCards
            items={items}
            logo={items.logo}
            title={items.title}
            desc={items.desc}
            communication={items.communicationMethod}
          />
        ))}
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-28 ">
        <div className="md:basis-1/2">
          <ContactForm />
        </div>
        <div className="md:basis-1/2 h-full mt-16 m-2 md:m-0">
          <img src={chart} alt="location" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
