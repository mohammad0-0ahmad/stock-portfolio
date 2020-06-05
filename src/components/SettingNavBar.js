import React, { useState } from "react";
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
  return <nav id="Setting-Nav">{navItem}</nav>;
};

export default SettingNavBar;
