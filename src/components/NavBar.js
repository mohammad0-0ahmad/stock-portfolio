import React from "react";
import Logo from "../imgs/stock-logo.png";
import NavItem from "./NavItem";
import LogoutButton from "./LogoutButton";
import "../css/NavBar.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ICONS = [faHome, faSuitcase, faCog];
const TEXTS = ['Hem', 'Min Portfölj', 'Inställningar'];
const LINKS = ['/', '/portfolio', '/settings'];

const NavBar = () => {

  let navItems = TEXTS.map((text, i) => (
    <NavItem
      key={i}
      text={text}
      icon={ICONS[i]}
      link={LINKS[i]}
      exact={true}
    />
  ));
  return (
    <nav id="NavBar">
      <NavLink to='/' className="logo" >
        <img src={Logo} alt="Logo" />
      </NavLink>
      {navItems}
      <div className="line">_______________</div>
      <LogoutButton handleClick={() => localStorage.clear()} />
    </nav>
  );
};

export default NavBar;
