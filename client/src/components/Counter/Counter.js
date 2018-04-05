import React, {Component} from 'react';
//import ReactDOM from "react-dom";
import * as API from "../../utils/moltin";
import Button from "./Button";
import CartContainer from "../CartContainer";
//import Product from "../Product";

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this);
        
        this.state = {
            counter: 0,
            totalCounter: 0
        };
    }
        
    handler(e) {
   console.log("here's E, yall...", e);
        this.setState({
            count: this.state.count
        })
    }
    
    getCart = () => {
        API.GetCartItems().then(this.setState({cart: this.handler.cart}));
        console.log("Get Cart Ran...");
    }

    increment = () => {
        this.setState({count: this.state.count +1});
    }
    decrement = () => {
        this.setState({count: this.state.count -1});
    }

    addToCartIncrease = () => {
        API.AddCart(this.state.products.id, ++this.state.count)
        .then(c =>{
            this.setState({count:this.state.count, totalCount:this.state.totalCount+=1}
            )})
    }

    addToCartDecrease = () => {
        API.AddCart(this.state.products.id, --this.state.count)
        .then(c =>{this.setState({count:this.state.count})})
    }

    updateCartIncrease = () => {
        API.UpdateCartPlus(this.state.products.id, this.state.count+1)
        .then(c => {this.setState({count: this.state.count})
        .catch(alert("Something is wrong with the cart."));
       })
      }

      updateCartDecrease = () => {
        API.UpdateCartMinus(this.state.products.id, this.state.count-1)
        .then(c => {this.setState({count: this.state.count})
        .catch(alert("Something is wrong with the cart."));
       })
      }

    status = () => {
        console.log("Product ids coming across ->", this.state.products.id);
    }

    render(){
        return(
            <div>
                {/*<h5> Quantity </h5> */}
                    <div className="counter_div">
                        <Button handler={this.addToCartIncrease}> + </Button>
                            <h5> {this.state.count} </h5>
                        <Button handler={this.addToCartDecrease}> - </Button>
                    </div>
            </div>
            );
        
    }
}
//console.log("Console...",Counter.status());
export default Counter;