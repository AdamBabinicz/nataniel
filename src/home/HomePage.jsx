import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import { latest, recommended, upcome } from "../dummyData";
import Upcomming from "../components/upcoming/Upcomming";
import Trending from "../components/trending/Trending";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);

  return (
    <>
      <Homes />
      <Upcomming
        items={items}
        title="Tuż po narodzinach i&nbsp;trochę później"
      />
      <Upcomming items={item} title="W szpitalu i&nbsp;w domu" />
      <Trending />
      <Upcomming items={rec} title="Wybrane" />
    </>
  );
};

export default HomePage;
