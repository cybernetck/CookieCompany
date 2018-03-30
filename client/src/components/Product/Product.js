import React from "react";
import ProductImage from "./ProductImage";
import "./Product.css";

const Product = props => (
   
    <div className="card">
     {console.log("Inside of Product. Here's props...", props)}
        <div className="card-body">
            <h2 className="card-title"> {props.name}
            </h2>
            <hr />
            <h4 className="card-text"> {props.description} </h4>
        </div>
    </div>

);

export default Product;