import React from "react";
import { useParams } from "react-router-dom";

import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";

const images = [
  { id: 1, src: img1, alt: "img1", desc: "This is image 1" },
  { id: 2, src: img2, alt: "img2", desc: "This is image 2" },
  { id: 3, src: img3, alt: "img3", desc: "This is image 3" },
  { id: 4, src: img4, alt: "img4", desc: "This is image 4" },
  { id: 5, src: img5, alt: "img5", desc: "This is image 5" },
];

const Detail = () => {
  const { id } = useParams();
  const image = images.find((img) => img.id === parseInt(id));
  return (
    <div>
      {image ? (
        <div>
          <h1>Detail</h1>
          <h3>{id}</h3>
          <h5>{image.desc}</h5>
        </div>
      ) : (
        <p>Image not found</p>
      )}
    </div>
  );
};

export default Detail;
