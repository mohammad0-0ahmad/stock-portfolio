import React from "react";
import "../css/LabelAndInput.css";

const LabelAndInput = ({ text, labelText, handleChange, type }) => {
  return (
    <div className='LabelAndInput'>
      <label>
        {labelText}
      </label>
      <input
        type={type}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default LabelAndInput;
