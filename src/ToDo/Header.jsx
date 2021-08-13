/* eslint-disable react/prop-types */
import React from 'react';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <div className="title">{title}</div>
    </header>
  );
};
export default Header;
