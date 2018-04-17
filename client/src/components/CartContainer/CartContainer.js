import React, {Component} from "react";
import * as API from "../../utils/moltin";
import Cart from "./Cart";
import { Link } from "react-router-dom";

class CartContainer extends Component {

    state = {
        products:[], 
        cart: ""
    }

    loadCart = () => {
        API.GetCartItems()
        .then(c => this.setState({cart: c}))
        .then("Get Cart...",this.state.cart);
       }

    resetCart = () => {
        API.DeleteCart()
        .then(c => this.setState({cart: c}))
        .then("Cart Reset...",this.state.cart);
    }

       componentDidMount() {
        this.loadCart();
        }
        
        render() {
            return (
                <div>
                    <div className="subpage_header">
                        <h1> Cart is empty </h1>
                    </div>

                    <div>
                    <Cart products={this.state.products} />
                    {/* <button onClick={()=>this.resetCart}> Reset </button>  */}
                    <Link to={"/"}>
                    <button className="category_button" onClick={()=>this.resetCart}> Keep Shopping! </button> 
                    </Link>
                    </div>
                </div>   
            );

        }

}

export default CartContainer;