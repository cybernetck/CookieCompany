import React from "react";
//import ProductImage from "./ProductImage";
import Counter from "../Counter";
import "./Product.css";
import { Link } from "react-router-dom";
const image1 = "https://s19.postimg.org/5y6n7iv83/cookies2.jpg";

const Product = props => (
   
    <div className="card" >
        <img src={image1} alt={props.name} />
        {/* <ProductImage product={props.product}/> */}
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
          <h4> Add to Cart </h4>
         <Link to={"/checkout"}>
            <i className="material-icons">add_shopping_cart</i>    
        </Link>
       
        </div>
    </div>

);

export default Product;