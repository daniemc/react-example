import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";

// Stateless funcional component
const Navbar = ({ counters }) => {
  return (
    <div className="nav">
      <div className="cart">
        <FontAwesomeIcon className="cart-icon" icon="shopping-cart" size="2x" />
        <span className="cart-count">{counters}</span>
      </div>
    </div>
  );
};

export default Navbar;
