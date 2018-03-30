const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  lastLoginDate: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
