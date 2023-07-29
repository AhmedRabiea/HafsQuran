//styles
import "./App.css";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import ServicesData from "./components/ServicesData";
import Statistics from "./components/Statistics";
import Blogs from "./components/Blogs";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyModal from "./components/myModal/MyModal";
import RegisterWelcome from "./components/myModal/RegisterWelcome";

import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="px-0 md:px-24">
      <Navbar setShowModal={setShowModal} />
      <Slider />
      <About />
      <ServicesData />
      <Statistics />
      <Blogs />
      <Teachers />
      <Contact />
      <Footer />
      <MyModal
        visible={showModal}
        handleClose={handleClose}
        setShowWelcome={setShowWelcome}
      />
      <RegisterWelcome visible={showWelcome} />
    </div>
  );
}

export default App;
