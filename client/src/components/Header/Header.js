import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => (
  <div>
    <span>
      <h1 className="app_header"> {children} </h1>
      <h5 className="cart_header"> Cart: 0 </h5> 
    </span>
  </div>
);
// Cart: {this.props.count ? this.props.count : 0} 
export default Header;
