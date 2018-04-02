import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Admin extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    password: ""
  };

  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers= () => {
    API.getCustomers()
      .then(res =>
        this.setState({ firstName: "", 
                         lastName: "",
                          address: "", 
                             city: "",
                            state: "",
                         password: ""})
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
    if (this.state.title && this.state.author) {
      API.saveCustomer({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
          city: this.state.city,
          state: this.state.state
      })
        .then(res => this.loadCustomers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Admin Page</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="First Name"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="Last Name"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="Address"
                placeholder="Address (required)"
              />
               <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (required)"
              />
              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="State"
                placeholder="State (required)"
              />
              <FormBtn
                disabled={!(this.state.firstName && 
                            this.state.lastName &&
                            this.state.address &&
                            this.state.city &&
                            this.state.state 
                          )}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Customers</h1>
            </Jumbotron>
            {/* {this.state.customers.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/customers/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCustomer(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Admin;
