import React from "react";
import { useParams } from "react-router-dom";

const images = [
  { id: 1, desc: "This is image 1" },
  { id: 2, desc: "This is image 2" },
  { id: 3, desc: "This is image 3" },
  { id: 4, desc: "This is image 4" },
  { id: 5, desc: "This is image 5" },
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
