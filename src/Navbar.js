import React, { useRef, useEffect, useState } from "react";
import { AiFillCloud } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import data from "./data";

function Navbar() {
  const refLinks = useRef(null);
  const refLinksContainer = useRef(null);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const linkHeight = refLinks.current.clientHeight;
    if (showLinks) {
      refLinksContainer.current.style.height = `${linkHeight + 16}px`;
    } else {
      refLinksContainer.current.style.height = `0px`;
    }
    console.log(refLinksContainer.current.clientHeight);
  }, [showLinks]);

  return (
    <nav>
      <div className="header">
        <button className="logo">
          <AiFillCloud />
          cloud services
        </button>
        <button
          className="nav-toggle"
          onClick={() => setShowLinks((oldState) => !oldState)}
        >
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={refLinksContainer}>
        <ul className="links" ref={refLinks}>
          {data.map((singleLink) => {
            const { id, name, link } = singleLink;
            return (
              <li key={id}>
                <a href={link}>{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
