import React from "react";

const About = (props) => {
  return (
    <div>
      <h2>Hello and welcome! I'm the about page</h2>
      <h1>{props.count}</h1>
      <button onClick={props.inc}>Click me</button>

      <button onClick={props.dec} disabled={props.count === 0}>
        Reduce
      </button>

      <button onClick={props.reset} disabled={props.count === 0}>
        Reset
      </button>
    </div>
  );
};

export default About;
