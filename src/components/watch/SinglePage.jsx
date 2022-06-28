import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummyData";
import Upcomming from "../upcoming/Upcomming";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  const [rec, setRec] = useState(recommended);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h2>{item.name}</h2>
              <span>
                | {item.date} | {item.time}
              </span>
              <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3>Data: {item.date}</h3>
                <p> {item.desc} </p>
                <p> {item.desc1} </p>
                <p> {item.desc2} </p>
                <p> {item.desc3} </p>
              </div>
              <div className="social">
                <h3>Szukaj : </h3>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </section>
          <Upcomming items={rec} title="Trochę w szpitalu i wreszcie w domku" />
        </>
      ) : (
        "no"
      )}
    </>
  );
};

export default SinglePage;
