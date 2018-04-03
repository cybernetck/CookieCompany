import React from "react";
import ProductImage from "./ProductImage";
import Counter from "../Counter";
import "./Product.css";

const image1 = "https://s19.postimg.org/5y6n7iv83/cookies2.jpg";

const Product = props => (
   
    <div className="card" >
    {/* <img imagesrc={props.imagesrc} alt={props.name} /> */}
    <ProductImage product={props.product}/>
     {console.log("Inside of Product. Here's props...", props)}
        <div className="card-body">
            <h2 className="card-title"> 
                {props.products.name}
            </h2>
            <hr/>
            <h4 className="card-text">
                {props.products.description}
            </h4>
            <hr/>
         <Counter props={props} />
        </div>
    </div>

);

export default Product;