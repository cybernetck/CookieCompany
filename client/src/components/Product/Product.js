import React from "react";
// import ReactDOM from "react-dom";
import ProductImage from "./ProductImage";
import Counter from "../Counter";
import "./Product.css";

const image1 = "https://s19.postimg.org/5y6n7iv83/cookies2.jpg";

const Product = props => (
   
    <div className="card" >
    <img src ={image1} alt={props.name} />
    <ProductImage product={props.product} 
                  imageArr={props.imageIdArr}
    />
     {console.log("Inside of Product. Here's props...", props)}
        <div className="card-body">
            <h2 className="card-title"> {props.name}
            </h2>
            <hr />
            <h4 className="card-text"> {props.description} </h4>
            <hr />
         <Counter props={props} />
        </div>
    </div>

);

export default Product;