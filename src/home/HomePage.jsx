import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import { latest, recommended, upcome, recommended2 } from "../dummyData";
import Upcomming from "../components/upcoming/Upcomming";
import Trending from "../components/trending/Trending";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  const [fourPlus, setFourPlus] = useState(recommended2);

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
      <Upcomming items={fourPlus} title="+4 miesiące" />
    </>
  );
};

export default HomePage;
