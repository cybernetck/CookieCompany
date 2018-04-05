import "./styles/stylesheet.css";
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
//import Jumbotron from "./components/Jumbotron";
import ProductImage from "./components/Product/ProductImage";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Store from "./pages/Store";
import CartContainer from "./components/CartContainer";
import Navpills from "./components/Navpills";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header> The Cookie Man. </Header>
            <Navpills isLoggedIn/>

          <Route exact path="/"         component={Store} />
          <Route exact path="/about"    component={About} />
          <Route exact path="/checkout" component={CartContainer} />
          <Route exact path="/customer" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;
