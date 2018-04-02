import axios from "axios";

export default {
  // Gets all books
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  // Gets the book with the given id
  getCustomer: function(id) {
    return axios.get("/api/customers/" + id);
  },
  // Deletes the book with the given id
  deleteCustomers: function(id) {
    return axios.delete("/api/customers/" + id);
  },
  // Saves a book to the database
  saveCustomers: function(customerData) {
    return axios.post("/api/customers", customerData);
  }
};
