// SidebarLink.js
import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ name, isActive, onClick }) => {
  return (
    <Link
      to={`/${name=="Dashboard"?"":name.toLowerCase()}`}
      className={`sidebar-link ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default SidebarLink;