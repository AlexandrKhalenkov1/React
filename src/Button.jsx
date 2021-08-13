/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({
  text, className, onClick, disabled = false
}) => (
  <button type="button" className={className} onClick={onClick} disabled={disabled}>
    {text}
&nbsp;
  </button>
);
export default Button;
