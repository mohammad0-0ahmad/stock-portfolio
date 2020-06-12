import React, { useState } from "react";
import '../css/SettingNavBar.css'
import SettingNavItem from "./SettingNavItem";

const SettingNavBar = ({ items, selected = items[0], handleSelect }) => {
  let navItem = items.map((item) => (
    <SettingNavItem
      key={item}
      text={item}
      handleClick={() => {
        handleSelect(item);
      }}
      selected={item === selected}
    />
  ));
  return <nav id="SettingNavBar">{navItem}</nav>;
};

export default SettingNavBar;
