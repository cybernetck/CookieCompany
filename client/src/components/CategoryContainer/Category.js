import React from "react";

const Category = props => (
     <button onClick={props.loadProductGroup}>
           <h5> {props.cat.name} </h5>
     </button>
    
); 

export default Category;