// import "./components/css/style.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Gallery from "./components/Gallery";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components_2/Navbar";
import Home from "./components_2/Home";
import About from "./components_2/About";
import Contact from "./components_2/Contact";
import Services from "./components_2/Services";
import Details from "./components_2/Detail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detail/id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
