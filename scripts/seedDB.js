const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://admin:cookiestore@ds127899.mlab.com:27899/heroku_d42brf5n",
  {
    useMongoClient: true
  }
);

const customerSeed = [
  {
    firstName: "Bob",
    lastName: "Doe",
    address: "123 Main St",
    city: "Cooltown",
    state: "CA",
    date: new Date(Date.now())
  },
  {
    firstName: "Rob",
    lastName: "Doe",
    address: "124 Main St",
    city: "Cooltown",
    state: "CA",
    date: new Date(Date.now())
  },
  {
    firstName: "Homer",
    lastName: "Simpson",
    address: "202 Donut Ln",
    city: "Springfield",
    state: "CO",
    date: new Date(Date.now())
  },
  {
    firstName: "Marge",
    lastName: "Simpson",
    address: "123 Main St",
    city: "Springfield",
    state: "CO",
    date: new Date(Date.now())
  },
  {
    firstName: "Rob",
    lastName: "Doe",
    address: "124 Main St",
    city: "Cooltown",
    state: "CA",
    date: new Date(Date.now())
  },
  {
    firstName: "Jane",
    lastName: "Main",
    address: "10 Witeria Lane",
    city: "Easttown",
    state: "WA",
    date: new Date(Date.now())
  }
];

db.Customer
  .remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
