import React, { useState } from "react";
import "./style.css";
import Home from "../homes/Home";
import { trending } from "../../dummyData";

const Trending = () => {
  const [items, setItems] = useState(trending);

  return (
    <>
      <section className="trending">
        <Home items={items} />
      </section>
    </>
  );
};

export default Trending;
