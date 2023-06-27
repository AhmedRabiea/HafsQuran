import React from "react";

const ContactCards = (props) => {
  return (
    <div className="w-1/3 h-60 text-left border-2 border-homeItem rounded-md bg-white p-8">
      <img src={props.logo} alt="contact us" />
      <header class="text-base font-normal mt-4">{props.title}</header>
      <div className="text-blogsparagraph text-xs font-normal mt-2">
        <p>{props.desc}</p>
      </div>
      <div className="text-sm font-normal mt-6">
        <p>{props.communication}</p>
      </div>
    </div>
  );
};

export default ContactCards;
