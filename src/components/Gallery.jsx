import React, { useState } from "react";
import "./css/gallery.css";
import Image from "./Image";

function Gallery() {
  const [imagesApi, setImage] = useState();
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((img) => {
      setImage(img);
      console.log(img);
    });
  return (
    <div className="img">
      {imagesApi?.map((image, id) => {
        return <Image image={image} id={image.id} />;
      })}
    </div>
  );
}

export default Gallery;
