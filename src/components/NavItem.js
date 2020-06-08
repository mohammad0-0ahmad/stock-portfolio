import React from "react";
import "../css/NavItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavItem = ({ text, icon, handleClick, select }) => {
  return (
    <li
      className={select ? "Active-Nav" : "Inactive-Nav"}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} className="icon" />
      {text}
    </li>
  );
};
export default NavItem;
