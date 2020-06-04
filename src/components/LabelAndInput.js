import React from "react";
import "./css/LabelAndInput.css";

const LabelAndInput = ({
  labelColor,
  textColor,
  text,
  labelText,
  handleChange,
  type,
}) => {
  let labelStyle = {
    color: labelColor,
  };
  let textStyle = {
    color: textColor,
  };

  return (
    <div>
      <label style={labelStyle}>
        {labelText}
        <input
          type={type}
          value={text}
          onChange={handleChange}
          style={textStyle}
        />
      </label>
    </div>
  );
};

export default LabelAndInput;
