import React, { useState, useEffect } from "react";
import { FaBaby, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiTime } from "react-icons/ti";

const HomeCard = ({
  item: {
    id,
    cover,
    name,
    rating,
    time,
    desc,
    starring,
    genres,
    tags,
    video,
    lang,
    nameL,
  },
}) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="..." />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{name}</h1>
            <div className="rating flex">
              <div className="rate">
                <FaBaby />
              </div>
              <label>{rating}</label>
              <span>
                <TiTime />
              </span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className="cast">
              <h4>
                <span>Zdrobnienia: </span>
                {starring}
              </h4>
              <h4>
                <span>{lang}: </span>
                {nameL}
              </h4>
              <h4>
                <span>Znani: </span>
                {tags}
              </h4>
            </div>
            {/* <button className="primary-btn">
              <FaPlay /> Więcej
            </button> */}
          </div>
          <div className="playButton row">
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className="img">
                  <img src="./images/2.png" alt="..." />
                  <img src="./images/3.png" alt="..." className="change" />
                </div>
                Oglądaj
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
