import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import helperService from "../services/helper.sercie";

const PopupRegisteration = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mycountries, setMyCountries] = useState([]);
  const [myPositions, setMyPositions] = useState([]);
  const [catchErrors, setCatchErrors] = useState({});

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState({});

  const getCountries = async () => {
    const countries = await helperService.getCountries();
    setMyCountries(countries);
  };

  const getPositions = async () => {
    const positions = await helperService.getPositions();
    setMyPositions(positions);
  };

  const handleRegister = () => {
    axios
      .post("https://mars.bltzo.com/api/v1/users/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: number,
        country: country,
        city: city,
        position: position,
        password: password,
        password_confirmation: confirmPassword,
      })
      .then(() => {
        props.handleClose();
        props.setShowWelcome(true);
        setTimeout(() => {
          props.setShowWelcome(false);
        }, 3000);
      })
      .catch((error) => {
        setCatchErrors(error.response.data.error.errors);
      });
  };

  const handleSiginIn = () => {
    axios
      .post("https://mars.bltzo.com/api/v1/users/login", {
        email: loginEmail,
        password: loginPassword,
      })
      .then(() => {
        props.handleClose();
        props.setShowWelcome(true);
        setTimeout(() => {
          props.setShowWelcome(false);
        }, 3000);
      })
      .catch((error) => {
        if (error.response.data.error.errors)
          setLoginError(error.response.data.error.errors);
        else console.log(error.response.data.error.message);
      });
  };

  useEffect(() => {
    getCountries();
    getPositions();
  }, []);

  // csrf token
  return (
    <div className="text-left mt-2 text-homeItem">
      <div className="flex gap-4 w-full text-homeItem mb-6">
        <Link
          className="p-2 basis-1/2 border-b-2 rounded-md text-center border-homeItem"
          to="register"
        >
          Register Now
        </Link>
        <Link
          className="p-2 basis-1/2 hover:border-b-2 border-homeItem rounded-md text-center active:border-b-2"
          to="signin"
        >
          Sign In
        </Link>
      </div>
      <Routes>
        <Route
          path="register"
          element={
            <div id="registerForm">
              <div className="md:flex w-full md:gap-8">
                <div className="mb-6 md:basis-1/2">
                  <label
                    for="firstName"
                    className="block mb-2 text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    value={firstName}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
                    placeholder="Enter your first name"
                    required
                  />
                  <span className="text-lg font-normal text-red-700">
                    {catchErrors.first_name}
                  </span>
                </div>
                <div className="mb-6 md:basis-1/2">
                  <label
                    for="lastName"
                    className="block mb-2 text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
                    placeholder="Enter your last name"
                    required
                  />
                  <span className="text-lg font-normal text-red-700">
                    {catchErrors.last_name}
                  </span>
                </div>
              </div>
              <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
                  placeholder="Enter your email address"
                  required
                />
                <span className="text-lg font-normal text-red-700">
                  {catchErrors.email}
                </span>
              </div>
              <div className="mb-6 basis-1/2">
                <label
                  for="phoneNumber"
                  className="block mb-2 text-sm font-medium"
                >
                  Your phone number
                </label>
                <input
                  type="number"
                  id="phonenumber"
                  value={number}
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                  className="border-2 border-inputborder rounded-md text-sm font-normal w-full block p-2"
                  placeholder="Enter your phone number"
                  required
                />
                <span className="text-lg font-normal text-red-700">
                  {catchErrors.number}
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                <div className="mb-6 md:basis-1/2">
                  <label
                    for="country"
                    className="block mb-2 text-sm font-medium"
                  >
                    Country
                  </label>
                  <select
                    data-te-select-init
                    data-te-select-placeholder="Select your country"
                    value={country}
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                    className="border-2 border-inputborder rounded-md p-2 w-full bg-white"
                  >
                    {mycountries.map((country) => (
                      <option value={country}>{country}</option>
                    ))}
                  </select>
                  <span className="text-lg font-normal text-red-700">
                    {catchErrors.country}
                  </span>
                </div>
                <div className="mb-6 md:basis-1/2">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium"
                  >
                    City
                  </label>
                  <select
                    name="city"
                    id="city"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
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
                <label
                  htmlFor="position"
                  className="block mb-2 text-sm font-medium"
                >
                  Position
                </label>
                <select
                  data-te-select-init
                  data-te-select-placeholder="Select your Position"
                  value={position}
                  onChange={(event) => {
                    setPosition(event.target.value);
                  }}
                  className="border-2 border-inputborder rounded-md p-2 w-full bg-white"
                >
                  {myPositions.map((positions) => (
                    <option value={positions.name}>{positions.name}</option>
                  ))}
                </select>
                <span className="text-lg font-normal text-red-700">
                  {catchErrors.position}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="mb-6 md:basis-1/2">
                  <label
                    for="Password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
                    placeholder="Enter your password"
                    required
                  />
                  <span className="text-lg font-normal text-red-700">
                    {catchErrors.password}
                  </span>
                </div>
                <div className="mb-6 md:basis-1/2">
                  <label
                    for="Password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                    className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
                    placeholder="Confirm your password"
                    required
                  />
                  <span className="text-lg font-normal text-red-700">
                    {catchErrors.password}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:gap-10 items-center justify-center mb-6">
                <button
                  onClick={handleRegister}
                  className="p-2 px-10 md:px-24 bg-homeItem rounded-lg text-white flex items-center justify-center gap-2"
                >
                  Register Now
                </button>
                <button
                  onClick={props.handleClose}
                  className="p-2 px-10 md:px-24 bg-homeItem rounded-lg text-white flex items-center justify-center gap-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          }
        />
        <Route
          path="signin"
          element={
            <div id="signInForm" className="md:w-96">
              <div className="mb-6">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
                  placeholder="Enter your email address"
                  value={loginEmail}
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  required
                />
                <span className="text-lg font-normal text-red-700">
                  {loginError.email}
                </span>
              </div>
              <div className="mb-6">
                <label htmlFor="password">Your Password</label>
                <input
                  type="password"
                  className="border-2 border-inputborder rounded-md text-sm font-normal block w-full p-2"
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  required
                />
                <span className="text-lg font-normal text-red-700">
                  {loginError.password}
                </span>
              </div>
              <button
                onClick={handleSiginIn}
                className="w-full p-2 bg-homeItem text-white font-normal text-center rounded-md mb-2"
              >
                SignIn
              </button>
              <Link to="forgetPassword" className="font-normal underline">
                Forget Your Password?
              </Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default PopupRegisteration;
