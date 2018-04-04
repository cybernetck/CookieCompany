import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Login extends Component {
  state = {
   userName: "",
    password: ""
  };

  componentDidMount() {
    this.loadCustomer();
  }

  loadCustomer = () => {
    API.getCustomer()
      .then(res =>
        this.setState({ userName: "", 
                         password:""})
      )
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
   
              <h1>Log in</h1>
 
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
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
