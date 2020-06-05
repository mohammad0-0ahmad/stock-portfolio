import React from "react";
import "../css/LabelAndInput.css";

const LabelAndInput = ({ text, labelText, handleChange, type, checked }) => {
  return (
    <div className='LabelAndInput'>
      <label>
        {labelText}
        <input
          checked={checked}
          type={type}
          value={text}
          onChange={handleChange}
          key={labelText}
        />
      </label>
    </div>
  );
};

export default LabelAndInput;
