import React from "react";
import "../css/SettingNavBar.css";

const SettingNavItem = ({ text, selected, handleClick }) => {
  return (
    <div className={selected ? "active" : "inactive"} onClick={handleClick}>
      {text}
    </div>
  );
};
export default SettingNavItem;
