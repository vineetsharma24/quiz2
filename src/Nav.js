import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Home from "./Home";

function Nav() {
  return (
    <div>
      <div>
        <header className="navbar">
          <Link to="/home">
            <div className="navbar__item">Home</div>
          </Link>
          <Link to="/feedback">
            <div className="navbar__item">Feedback</div>
          </Link>
          <Link to="/contact">
            <div className="navbar__item">Contact</div>
          </Link>
        </header>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default Nav;
