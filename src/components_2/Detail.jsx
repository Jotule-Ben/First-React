import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Detail</h1>
      <h3>{id}</h3>
    </div>
  );
};

export default Detail;
