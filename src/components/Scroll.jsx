import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
function Scroll() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: orange;
    padding: 0.3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 2500;
    transition: 0.5s;

    :hover {
      background: #006eff6d;
      border: 1px solid #fff;
    }

    svg {
      color: white;
      font-size: 1.5rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 85vw;
      right: initial;
    }
  }
`;

export default Scroll;
