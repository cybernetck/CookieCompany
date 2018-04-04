import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
  client_id: 'XBhWG5uOk67N9EX4dSKoyrYC5JzVlPyfh6FAYFZm6i',
  client_secret: 'IelEz4ePGu8EVntxjpVFE7qVooiWakYmGUEgEMHUOk'
});

Moltin.Authenticate().then((response) => {
  console.log('authenticated - yay', response);
});

//var exports = (module.exports = {});

export const GetProducts = () => Moltin.Products.With('files, main_images').All();

export const GetProduct = ID => Moltin.Products.Get(ID);

export const GetCategories = (resources) => Moltin.Categories.With(resources).All();

export const GetCollections = (resources) => Moltin.Collections.With(resources).All();

export const GetCategory = ID => Moltin.Files.Get(ID);
 
export const GetBrands = () => Moltin.Brands.All();

export const GetFile = (ID) => Moltin.Files.Get(ID);

export const AddCart = (ID, quantity) => Moltin.Cart().AddProduct(ID, quantity);

export const UpdateCartPlus = (ID, quantity) => Moltin.Cart().UpdateItemQuantity(ID, quantity + 1);

export const UpdateCartMinus = (ID, quantity) => Moltin.Cart().UpdateItemQuantity(ID, quantity - 1);

export const UpdateCart = (ID, quantity) => Moltin.Cart().UpdateItemQuantity(ID, quantity);

export const GetCartItems = () => Moltin.Cart().Items();

export const Checkout = (data) => Moltin.Cart().Checkout(data);

export const GetOrder = (ID) => Moltin.Orders.Get(ID);

export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

export const DeleteCart = () => Moltin.Cart().Delete();