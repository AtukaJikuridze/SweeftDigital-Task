import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar-container">
          <img
            src="https://sweeftdigital.com/assets/logo-white-new.svg"
            alt="SweeftDigital Logo"
            width={200}
          />
          <ul>
            <li>
              <Link to={"Main"} className="roboto-regular">
                Main
              </Link>
            </li>
            <li>
              <Link to={"History"} className="roboto-regular">
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
