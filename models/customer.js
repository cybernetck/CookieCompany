const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false},
  address: { type: String, required: false},
  city: { type: String, required: false },
  state: { type: String, required: false },
  lastLoginDate: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
