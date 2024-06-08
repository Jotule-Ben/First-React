import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    { id: 1, name: "Item 1", description: "This is item 1" },
    { id: 2, name: "Item 2", description: "This is item 2" },
    { id: 3, name: "Item 3", description: "This is item 3" },
  ];
  return (
    <div>
      <h1>Hey there, I'm the home page</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`detail/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
