// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var Product = sequelize.define("Product", {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [5]
    }
  },
  productDesc: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        len: [5]
    }
  },
  productImg: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Syncs with DB
Product.sync();

// Makes the Product Model available for other files (will also create a table)
module.exports = Product;