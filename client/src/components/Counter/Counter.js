import React, {Component} from 'react';
//import ReactDOM from "react-dom";
import Button from './Button';


class Counter extends Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({count: this.state.count +1});
    }
    decrement = () => {
        this.setState({count: this.state.count -1});
    }

    render(){
        return(
            <div className="counterdiv">
                <h5> Quantity </h5>
                <Button handler={this.increment}> + </Button>
                <h5> {this.state.count} </h5>
                <Button handler={this.decrement}> - </Button>
    
            </div>
            );
    }
}

export default Counter;