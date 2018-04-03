import React, {Component} from 'react';
//import ReactDOM from "react-dom";
import * as API from "../../utils/moltin";
import Button from "./Button";
import Product from "../Product";

class Counter extends React.Component {

    state = {
        products:this.props.products,
        count: 0
    }

    componentDidMount() {
    
        }

    increment = () => {
        this.setState({count: this.state.count +1});
    }
    decrement = () => {
        this.setState({count: this.state.count -1});
    }

    updateCartIncrease = () => {
        API.UpdateCartPlus(this.state.products.id, this.state.count+1)
        .then(c => {this.setState({count: this.state.count});
       })
      }

      updateCartDecrease = () => {
        API.UpdateCartMinus(this.state.products.id, this.state.count-1)
        .then(c => {this.setState({count: this.state.count});
       })
      }

    render(){
        return(
            <div>
                <h5> Quantity </h5>
                    <div className="counterdiv">
                        <Button handler={this.updateCartIncrease}> + </Button>
                            <h5> {this.state.count} </h5>
                        <Button handler={this.updateCartDecrease}> - </Button>
                    </div>
            </div>
            );
        
    }
}

export default Counter;