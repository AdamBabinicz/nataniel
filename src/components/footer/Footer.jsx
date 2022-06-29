import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdBabyChangingStation } from "react-icons/md";
import { TbBabyCarriage } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>
                <Link to="/">Start</Link>
              </li>
              {/* <li>Privacy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Zobacz listę</li> */}
            </ul>
            <p>Radom 2022 - {new Date().getFullYear()}.</p>
          </div>
          <div className="boxF">
            <h3>Znajdziesz mnie</h3>
            <div className="soc">
              <a
                href="https://www.facebook.com/NoworodekNiemowle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/r_a_ziemkiewicz/status/1204720073325400065"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/explore/tags/noworodek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/watch?v=XEHLreWatoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="boxL">
            <h3>Przydatne linki</h3>
            <div className="img flexSB">
              <a
                href="https://www.medela.pl/dla-mam-karmiacych-piersia/doswiadczenia-matki/powrot-z-dzieckiem-do-domu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdBabyChangingStation />
              </a>
              <a
                href="https://www.enfamil.pl/blogs/noworodki-0-6/obowiazkowe-informacje-dla-swiezo-upieczonych-mam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBabyCarriage />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
