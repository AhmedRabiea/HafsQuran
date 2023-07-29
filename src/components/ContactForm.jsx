import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactForm = () => {
  return (
    <form className="text-left mt-16">
      <div className="mb-6">
        <label for="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className="mb-6">
        <label for="subject" className="block mb-2 text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subjext"
          className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
          placeholder="Enter a message subject"
          required
        />
      </div>
      <div className="mb-6">
        <label for="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm font-normal border-2 border-inputborder rounded-sm"
          placeholder="Describe what you need here.."
        ></textarea>
      </div>

      <button className="p-2 px-24 bg-homeItem rounded-lg text-white flex items-center justify-center gap-2">
        Submit
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </form>
  );
};

export default ContactForm;
