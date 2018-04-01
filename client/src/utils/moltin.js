import axios from "axios";
import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
  client_id: 'XBhWG5uOk67N9EX4dSKoyrYC5JzVlPyfh6FAYFZm6i',
  client_secret: 'IelEz4ePGu8EVntxjpVFE7qVooiWakYmGUEgEMHUOk'
});

Moltin.Authenticate().then((response) => {
  console.log('authenticated - yay', response);

});
//var exports = (module.exports = {});

export const GetProducts = function(resources) {
  return Moltin.Products.With(resources).All();
};

export const GetProduct = function(ID) {
  return Moltin.Products.Get(ID);
};

export const GetCategories = function(resources) {
  return Moltin.Categories.With(resources).All();
};

export const GetCollections = function(resources) {
  return Moltin.Collections.With(resources).All();
};

export const GetCategory = function(ID) {
  return Moltin.Categories.Get(ID);
};

export const GetBrands = function(resources) {
  return Moltin.Brands.With(resources).All();
};

export const GetFile = function(ID) {
  return Moltin.Files.Get(ID);
};

export const AddCart = function(id, quantity) {
  return Moltin.Cart.AddProduct(id, quantity);
};

export const UpdateCartPlus = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity + 1);
};

export const UpdateCartMinus = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity - 1);
};

export const UpdateCart = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity);
};

export const GetCartItems = function() {
  return Moltin.Cart.Items();
};

export const Checkout = function(data) {
  return Moltin.Cart.Checkout(data);
};

export const GetOrder = function(ID) {
  return Moltin.Orders.Get(ID);
};

export const OrderPay = function(ID, data) {
  return Moltin.Orders.Payment(ID, data);
};

export const DeleteCart = function() {
  return Moltin.Cart.Delete();
};