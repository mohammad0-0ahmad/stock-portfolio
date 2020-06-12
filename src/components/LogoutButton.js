import React from "react";
import LogoutIcon from "../imgs/logout.png";
import { useHistory } from "react-router-dom";

const TEXT = "Logga ut";
const LogoutButton = () => {
  const history = useHistory()
  return (
    <button
      className="logoutButton"
      onClick={() => {
        /** show prombt */
        localStorage.clear();
        history.push('/');
      }}

    >
      <img src={LogoutIcon} alt="Exist"></img>
      {TEXT}
    </button>
  );
};
export default LogoutButton;
