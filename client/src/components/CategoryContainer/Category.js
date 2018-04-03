import React from "react";

const Category = props => (
     <button className="category_button" onClick={props.loadProductGroup}>
           <h5> {props.cat.name} </h5>
     </button>
    
); 

export default Category;