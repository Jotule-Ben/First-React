// import React, { useState } from "react";

const Home = ({ userName }) => {
  return (
    <div>
      <h1>Hey there, I'm the home page</h1>
      <h3>{userName}</h3>
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
