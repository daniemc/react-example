import React from "react";

// Stateless funcional component
const Navbar = ({ counters }) => {
  return (
    <nav className="">
      <span className="">
        # Items
        <span className="">{counters}</span>
      </span>
    </nav>
  );
};

export default Navbar;
