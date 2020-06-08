import React from "react";
import Logo from "../imgs/stock-logo.png";
import NavItem from "./NavItem";
import LogoutButton from "./LogoutButton";
import "../css/NavBar.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ items, select, handleSelect }) => {
  let icons = [faHome, faSuitcase, faCog];
  let i = 0;
  let links = items.map((item) => (
    <NavItem
      key={item}
      text={item}
      icon={icons[i++]}
      handleClick={() => {
        handleSelect(item);
      }}
      select={item === select}
    />
  ));
  return (
    <nav id="NavBar">
      <img className="logo" src={Logo} alt="Logo" />
      {links}
      <div className="line">_______________</div>
      <LogoutButton handleClick={handleSelect} />
    </nav>
  );
};

export default NavBar;
