import axios from "axios";
import React, { useEffect, useState } from "react";

const PopupRegisteration = (props) => {
  const [mycountries, setMyCountries] = useState([]);
  const [myPositions, setMyPositions] = useState([]);

  const getCountries = async () => {
    const result = await axios.get(
      "https://mars.bltzo.com/api/v1/helper/countries"
    );

    setMyCountries(result.data.data.countries);
  };

  const getPositions = async () => {
    const positionsResult = await axios.get(
      "https://mars.bltzo.com/api/v1/helper/positions"
    );

    setMyPositions(positionsResult.data.data.positions);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getPositions();
  }, []);

  return (
    <form className="text-left mt-2 text-homeItem">
      <h1 className="block text-center font-bold text-xl mb-6">Register Now</h1>
      <div className="md:flex w-full md:gap-8">
        <div className="mb-6 md:basis-1/2">
          <label for="firstName" className="block mb-2 text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-6 md:basis-1/2">
          <label for="lastName" className="block mb-2 text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
            placeholder="Enter your last name"
            required
          />
        </div>
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
      <div className="mb-6 basis-1/2">
        <label for="phoneNumber" className="block mb-2 text-sm font-medium">
          Your phone number
        </label>
        <input
          type="number"
          id="phonenumber"
          className="border-2 border-inputborder rounded-md text-sm font-normal w-full block p-2"
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div className="flex gap-8">
        <div className="mb-6 basis-1/2">
          <label for="country" className="block mb-2 text-sm font-medium">
            Country
          </label>
          <select
            data-te-select-init
            data-te-select-placeholder="Select your country"
            className="border-2 border-inputborder rounded-md p-2 w-full bg-white"
          >
            {mycountries.map((country) => (
              <option value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="mb-6 basis-1/2">
          <label htmlFor="city" className="block mb-2 text-sm font-medium">
            City
          </label>
          <select
            name="city"
            id="city"
            className="border border-inputborder rounded-md p-2 w-full bg-white"
          >
            <option value="cairo">Cairo</option>
            <option value="cairo">Cairo</option>
            <option value="cairo">Cairo</option>
            <option value="cairo">Cairo</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="position" className="block mb-2 text-sm font-medium">
          Position
        </label>
        <select
          data-te-select-init
          data-te-select-placeholder="Select your Position"
          className="border-2 border-inputborder rounded-md p-2 w-full bg-white"
        >
          {myPositions.map((positions) => {
            <option value={positions.name}>{positions.name}</option>;
          })}
        </select>
      </div>
      <div className="flex gap-8">
        <div className="mb-6 basis-1/2">
          <label for="Password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6 basis-1/2">
          <label for="Password" className="block mb-2 text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="text"
            id="confirmPassword"
            className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
            placeholder="Confirm your password"
            required
          />
        </div>
      </div>
      <div className="flex gap-10 items-center justify-center mb-6">
        <button className="p-2 px-10 md:px-24 bg-homeItem rounded-lg text-white flex items-center justify-center gap-2">
          Register Now
        </button>
        <button
          onClick={props.onCancel}
          className="p-2 px-10 md:px-24 bg-homeItem rounded-lg text-white flex items-center justify-center gap-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PopupRegisteration;
