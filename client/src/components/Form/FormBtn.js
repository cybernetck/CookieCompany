import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 , width: 100}} className="btn btn-success">
    {props.children}
  </button>
);
