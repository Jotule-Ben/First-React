// import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ products, loading }) => {
  //console.log(products);
  if (loading) {
    return <div>Loading product page.........</div>;
  }
  return (
    <div>
      <h1>Hey there, I'm the home page</h1>
      <div>
        {products.map((product) => (
          <div id={product.id}>
            <span>{product.title}</span>
            <img src={product.image} alt={product.title} />
            <p>{product.category}</p>
            <p>{product.price}</p>
            <Link to={`/detail/${product.id}`}>See more</Link>
          </div>
        ))}
      </div>
      {/* <h3>{userName}</h3> */}
      {/* <h3>{count}</h3> */}
      {/* <h3>{props.text}</h3> */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>

      <button onClick={reduceCountFn} disabled={count === 0}>
        Reduce
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
        disabled={count === 0}
      >
        Reset
      </button> */}

      {/* <button onClick={props.textFn}>Change Text</button> */}
    </div>
  );
};

export default Home;
