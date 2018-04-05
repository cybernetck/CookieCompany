import axios from "axios";

export default {
  // Gets all books
  getAllCustomers: function() {
    return axios.get("/api/customer");
  },
  // Gets the book with the given id
  getCustomer: function(id) {
    console.log("Getting someone... yea!", id);
    return axios.get("/api/customer/" + id);
  },
  // Deletes the book with the given id
  deleteCustomer: function(id) {
    return axios.delete("/api/customer/" + id);
  },
  // Saves a book to the database
  saveCustomer: function(customerData) {
    console.log("Saving Data!...", customerData);
    return axios.post("/api/customer", customerData);
  }
};
