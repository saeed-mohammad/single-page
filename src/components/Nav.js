import React, { useState } from "react";
import "./style/Nav.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <header>
      <h1 className="logo">
        <span>
          <BsFillHouseFill />
          Real
        </span>
        State
      </h1>
      <button>Sign In</button>
      <nav className={click ? "active" : ""}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaRegTimesCircle className="icon" />
        ) : (
          <HiOutlineMenuAlt4 className="icon" />
        )}
      </div>
    </header>
  );
};

export default Nav;
