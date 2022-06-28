import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import Modal from "../Portal/Modal";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/1.png" alt="..." />
            </div>
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link to="/">Start</Link>
              {/* <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/pricing">Pricing</Link> */}
              <Link to="/kontakt">Kontakt</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <FaBars /> : <FaTimes />}
            </button>
          </nav>
          <div className="account flexSB">
            {/* <FaSearch />
            <FaBell />
            <FaUser /> */}
            <button onClick={() => Toggle()}>Czytaj</button>
          </div>
        </div>
        <Modal show={modal} close={Toggle} title="Słynny gdański Nataniel">
          <p>
            - Nataniel Mateusz Wolf osiągnął w życiu wszystko dzięki ciężkiej
            pracy, był z wykształcenia lekarzem, ale tak naprawdę pociągały go
            gwiazdy, a zwłaszcza Syriusz - pisał Waldemar Borzestowski o tym
            wybitnym XVIII-wiecznym gdańszczaninie.
          </p>
          <br />
          <p>
            <em>www.gdansk.pl/wiadomosci</em>
          </p>
        </Modal>
      </header>
    </>
  );
};

export default Header;
