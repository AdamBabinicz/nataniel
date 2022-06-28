import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { recommended } from "../../dummyData";
import "./ucard.css";

const Ucard = ({ item: { id, cover, name, time } }) => {
  const [popupcontent, setPopupcontent] = useState([]);
  const [popuptoggle, setPopuptoggle] = useState(false);
  // const [styling, setStyling] = useState(null);
  const changecontent = (recommended) => {
    setPopupcontent([recommended]);
    setPopuptoggle(!popuptoggle);

    // if (styling === null) {
    //   setStyling({
    //     position: "fixed",
    //   });
    // } else {
    //   setStyling(null);
    // }
  };

  return (
    <>
      <div className="over">
        <div className="movieBox">
          <div className="img">
            <img src={cover} alt="..." />
          </div>
          <div className="text">
            <h3>{name}</h3>
            <span>{time}</span> <br />
            <button
              className="primary-btn"
              onClick={() => changecontent(recommended)}
            >
              <FaPlay /> Zobacz
            </button>
          </div>
        </div>

        {popuptoggle && (
          <div className="pop_up_container" onClick={changecontent}>
            <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
              <div className="pop_up_header">
                <button onClick={changecontent}>x</button>
              </div>
              <div className="pop_up_content">
                {popupcontent.map((pop) => {
                  return (
                    <div className="pop_up_card">
                      <img src={cover} alt="..." />
                      <p>{pop.więcej}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Ucard;
