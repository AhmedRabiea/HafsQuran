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

function App() {
  return (
    <div className="px-0 md:px-24">
      <Navbar />
      <Slider />
      <About />
      <ServicesData />
      <Statistics />
      <Blogs />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
