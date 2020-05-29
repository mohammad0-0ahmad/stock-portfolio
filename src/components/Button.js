import React from "react";
import "./css/Button.css";

const Button = ({ bgColor, buttonText, handleClick }) => {
  let style = {
    backgroundColor: bgColor,
  };
  
  return (
    <button className='Button' style={style} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
