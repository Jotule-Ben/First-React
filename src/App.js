import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components_3/Navbar";
import Home from "./components_3/Home";
import About from "./components_3/About";
import Contact from "./components_3/Contact";
import Services from "./components_3/Services";
import Details from "./components_3/Detail";

function App() {
  // const [count, setCount] = useState(0);

  // const [text, setText] = useState("Benedicta");

  // const countFn = () => {
  //   setCount(count + 1);
  // };

  // const reduceCountFn = () => {
  //   setCount(function (prevcount) {
  //     return prevcount > 0 ? prevcount - 1 : prevcount;
  //   });
  // };

  // const resetCountFn = () => {
  //   setCount(0);
  // };

  // const changeTextValue = () => {
  //   setText("Ojotule");
  // };

  // const userName = "Benny12";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} loading={loading} />}
        />
        {/* <Route
          path="/"
          element={
            <Home textFn={changeTextValue} text={text} userName={userName} />
          }
        />
        <Route
          path="/about"
          element={
            <About
              count={count}
              inc={countFn}
              dec={reduceCountFn}
              reset={resetCountFn}
            />
          }
        /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
