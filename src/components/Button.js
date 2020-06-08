import React from "react";
import "../css/Button.css";

const Button = ({ buttonText, handleClick, className, type = 'button' }) => {
  return (
    <button
      className={className ? 'Button ' + className : 'Button'}
      onClick={handleClick}
      type={type}
    >
      {buttonText}
    </button>
  );
};

export default Button;
