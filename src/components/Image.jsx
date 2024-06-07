import React from "react";
import "./css/image.css";

const Image = ({ image, id }) => {
  return (
    <div className="imageContainer">
      <div className="imgCon">
        <img src={image.image} alt={image.alt} id={id} />
      </div>
      <h4>{image.title}</h4>
      <p>{image.category}</p>
    </div>
  );
};

export default Image;
