import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetail(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Detail</h1>
      <img src={detail.image} alt="" />
      <span>{detail.title}</span>
      <p>{detail.description}</p>
      <p>{detail.price}</p>
      <p>{detail.category}</p>
    </div>
  );
};

export default Detail;
