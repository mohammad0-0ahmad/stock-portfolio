import React from "react";
import "./css/Button.css";

const Button = ({ bgColor, buttonText, handleClick, width,marginleft }) => {
  let style = {
    backgroundColor: bgColor,
    width: width,
    marginLeft: marginleft
  };
  
  return (
    <button className='Button' style={style} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
