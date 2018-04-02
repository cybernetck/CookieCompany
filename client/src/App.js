import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/stylesheet.css";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Admin from "./pages/Admin";
import Store from "./pages/Store";
import ProductImage from "./components/Product/ProductImage";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header> The Cookie Man. </Header>
          <Jumbotron />
          <Route exact path="/" component={Store} />
          <Route exact path="/customers" component={Admin} />
        </div>
      </Router>
    );
  }
}
export default App;
