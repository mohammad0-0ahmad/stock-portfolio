import React from "react";
import LogoutIcon from "../imgs/logout.png";
const VALUE = "Logga ut";
const LogoutButton = ({ handleClick }) => {
  return (
    <button className="logoutButton" onClick={() => handleClick(VALUE)}>
      <img src={LogoutIcon} alt="Exist"></img>
      {VALUE}
    </button>
  );
};
export default LogoutButton;
