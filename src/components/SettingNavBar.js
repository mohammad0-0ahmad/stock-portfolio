import React, { useState } from "react";
import SettingNavItem from "./SettingNavItem";

const SettingNavBar = ({ items,selected = items[0].text,handleSelect }) => {
  let navItem = items.map((item) => (
    <SettingNavItem
      key={item.text}
      text={item.text}
      handleClick={() => {
        handleSelect(item.text);
      }}
      selected={item.text === selected}
    />
  ));
  return <nav id="Setting-Nav">{navItem}</nav>;
};

export default SettingNavBar;
