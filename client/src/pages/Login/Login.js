import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

// "5ac5172092328d6002fb8779"
class Login extends Component {
  state = {
    users: [],
    _id: "",
    isLoggedIn: "",
    userLoggedIn: ""
    }

  handleLogout = () => {
    this.setState({isLoggedIn: false})
  }

  handleLogIn = () => {
    this.setState({isLoggedIn: true})
  }

  componentDidMount() {
    this.loadCustomer();
  }

  loadCustomer = () => {
    API.getAllCustomers()
      .then(res => this.setState({users: res.data, userName:"", password:"" }))
      .catch(err => console.log(err));
  };

  deleteCustomer= id => {
    API.deleteCustomer(id)
      .then(res => this.loadCustomer())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.saveCustomer({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(res => this.loadCustomer())
        .catch(err => console.log(err));
    }
  };

  handleLogin = event => {
    event.preventDefault();
    API.getCustomer(this.state._id)
    .then(res =>
      (res.data) ?
        console.log("here's what we got back", res.data):
        console.log("sorry, not on database"))
    .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        <div className="subpage_header">
            <h1>Log in</h1>
         </div>
            
            {/* <form>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
             
              <FormBtn
                disabled={!(this.state.userName && 
                            this.state.password  
                          )}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form> */}
            <form>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
             
              <FormBtn
                disabled={!(this.state.userName && 
                            this.state.password  
                          )}
                onClick={this.handleLogin}
              >
                Submit
              </FormBtn>
            </form>
        </div>
    );
  }
}

export default Login;
