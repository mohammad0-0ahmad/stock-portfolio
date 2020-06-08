import React from "react";
import "../css/LabelAndInput.css";

const LabelAndInput = ({ text, labelText, handleChange, type, checked, placeHolder, className }) => {
  return (
    <div className={type === 'checkbox' ? 'LabelAndInputCheckboxItems' : `LabelAndInput ${className}`}>
      <label>
        {labelText}
        <input
          checked={checked}
          type={type}
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          key={labelText}
          placeholder={placeHolder}
        />
      </label>
    </div>
  );
};

export default LabelAndInput;
