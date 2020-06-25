import React, { useState } from "react";
import "../css/LabelAndInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LabelAndInput = ({ text, labelText, handleChange, type, checked, placeHolder, className, pattern, title, required = false }) => {
  const [visibleValue, setVisibleValue] = useState(false)

  if (type === 'checkbox') {
    return (
      <div className='LabelAndInputCheckboxItems'>
        <label>
          <input
            checked={checked}
            type={type}
            value={text}
            onChange={(e) => handleChange(e.target.value)}
            key={labelText}
          />
          {labelText}
        </label>
      </div>
    );
  }
  else {

    return (
      <div className={`LabelAndInput ${className}`}>
        <label>
          {labelText}
          <div>
            <input
              checked={checked}
              type={
                type !== 'password' ? type : (!visibleValue ? 'password' : 'text')
              }
              value={text}
              onChange={(e) => handleChange(e.target.value)}
              key={labelText}
              placeholder={placeHolder}
              pattern={pattern}
              title={title}
              required={required}
            />
            {type === 'password' &&
              <FontAwesomeIcon icon={
                visibleValue ? faEye : faEyeSlash
              }
                className='showHiddenPassword'
                onClick={() => {
                  setVisibleValue(!visibleValue)
                }}
              />
            }
          </div>
        </label>
      </div>
    );
  }
};

export default LabelAndInput;