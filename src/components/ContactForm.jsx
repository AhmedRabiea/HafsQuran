import React from "react";

import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";

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
          class="block p-2.5 w-full text-sm font-normal border-2 border-inputborder rounded-sm"
          placeholder="Describe what you need here.."
        ></textarea>
      </div>
      <a
        href="#"
        className="p-2 px-24 bg-homeItem rounded-lg w-52 h-11 text-white flex"
      >
        <button>Submit </button>
        <FaArrowRight />
      </a>
    </form>
  );
};

export default ContactForm;
