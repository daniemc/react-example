import React from "react";

// Stateless funcional component
const Navbar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        # Items
        <span className="bange badge-pill badge-secondary m-2">{counters}</span>
      </span>
    </nav>
  );
};

export default Navbar;
