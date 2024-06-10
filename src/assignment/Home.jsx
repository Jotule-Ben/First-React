import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";

const Home = () => {
  const images = [
    { id: 1, src: img1, alt: "img1", desc: "This is image 1" },
    { id: 2, src: img2, alt: "img2", desc: "This is image 2" },
    { id: 3, src: img3, alt: "img3", desc: "This is image 3" },
    { id: 4, src: img4, alt: "img4", desc: "This is image 4" },
    { id: 5, src: img5, alt: "img5", desc: "This is image 5" },
  ];
  return (
    <>
      <h1>Hey there, I'm the home page</h1>
      <div className="home">
        <ul className="homeUl">
          {images.map((image) => (
            <Link to={`detail/${image.id}`}>
              <img src={image.src} alt={image.alt} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
