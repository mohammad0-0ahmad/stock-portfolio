import React from "react";
import "../css/Button.css";

const Button = ({ buttonText, handleClick, className }) => {
  return (
    <button className={className ? 'Button ' + className : 'Button'} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
