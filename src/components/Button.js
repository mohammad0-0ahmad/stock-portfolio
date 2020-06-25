import React from "react";
import "../css/Button.css";

const Button = ({ buttonText, handleClick, className = '', type = 'button' }) => {
  return (
    <button
      className={'Button ' + className}
      onClick={handleClick}
      type={type}
    >
      {buttonText}
    </button>
  );
};

export default Button;