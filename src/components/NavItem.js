import React from "react";
import "../css/NavItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavItem = ({ text, icon, link, exact }) => {
  return (
    <NavLink
      to={link}
      exact={exact}
      className='NavItem'
    >
      <FontAwesomeIcon icon={icon} className="icon" />
      {text}
    </NavLink>
  );
};

export default NavItem;