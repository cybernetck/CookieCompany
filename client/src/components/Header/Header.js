import React from "react";


const Header = ({ children }) => (
  <div>
    <span>
    <h1 className="appheader"> {children} </h1>
    </span>
  </div>
);

export default Header;
