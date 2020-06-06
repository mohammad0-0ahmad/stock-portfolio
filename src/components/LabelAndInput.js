import React from "react";
import "../css/LabelAndInput.css";

const LabelAndInput = ({ text, labelText, handleChange, type, checked, twoInOneRow }) => {
  return (
    <div className={[type==='checkbox' ? 'LabelAndInputCheckboxItems' : 'LabelAndInput',  twoInOneRow===true ? 'LabelAndInputTwoInOneRow' : ''].join(" ")}>
      
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
