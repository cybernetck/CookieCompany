import React, { Component } from "react";
import { gateway as MoltinGateway } from '@moltin/sdk';
import Product from "/Users/MatthewWomack/Documents/2018/WorkingFolder/Project3/CookieCompany/client/src/components/Product/Product.js";

class Store extends React.Component {
  state = {
    products: [],
    id : "" ,
    name : "",
    description : "",
    price : ""  
};

componentDidMount() {
  this.loadProducts();
  }
  
    loadProducts = () => {
    //   API.getBooks()
    //     .then(res =>
    //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //     )
    //     .catch(err => console.log(err));

    const Moltin = MoltinGateway({
      client_id: 'XBhWG5uOk67N9EX4dSKoyrYC5JzVlPyfh6FAYFZm6i'
    });
    
    Moltin.Authenticate().then((response) => {
      // console.log('authenticated - yay', response);
      // eslint-disable-next-line
      const products = Moltin.Products.With('main_image').All()
      .then((p) => {this.setState({products: p.data, id:p.data.id , name: p.data.name, description: p.data.description, price: p.data.price});
       })
       .catch(err => console.log('There was an error:' + err));
      //console.log(products);
      });
    };
  
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

  
    render(){
      return (
        <div>
          <div className="row">
          {this.state.products.map( p =>
          <div className="col-md-6">
          <Product
           product={p}
           description={p.description}
           name={p.name}/>
           </div>
         )}
        </div>
        </div>
      )
    }
  }
  
  export default Store;
  