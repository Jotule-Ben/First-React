import React from "react";
// import "./components/css/style.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Gallery from "./components/Gallery";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components_2/Navbar";
// import Home from "./components_2/Home";
// import About from "./components_2/About";
// import Contact from "./components_2/Contact";
// import Services from "./components_2/Services";
// import Details from "./components_2/Detail";

import Navbar from "./components_3/Navbar";
import Home from "./components_3/Home";
import About from "./components_3/About";
import Contact from "./components_3/Contact";
import Services from "./components_3/Services";
import Details from "./components_3/Detail";

// import Navbar from "./assignment/Navbar";
// import Home from "./assignment/Home";
// import Detail from "./assignment/Detail";
// import "./assignment/css/style.css";

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Hero />
    //   <Gallery />
    // </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detail/:id" element={<Details />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
