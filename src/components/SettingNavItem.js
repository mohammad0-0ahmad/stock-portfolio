import React from "react";
import '../css/SettingNavItem.css'

const SettingNavItem = ({ text, selected, handleClick }) => {
  return (
    <div className={'SettingNavItem ' + (selected ? "active" : "inactive")} onClick={handleClick}>
      {text}
    </div>
  );
};

export default SettingNavItem;