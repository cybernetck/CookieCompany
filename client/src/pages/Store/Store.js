import React, { Component } from "react";
//import { gateway as MoltinGateway } from '@moltin/sdk';
import * as API from "../../utils/moltin";
import Product from "../../components/Product";
import Counter from "../../components/Counter";

class Store extends React.Component {
  state = {
    products: [],
    imageId: "",
    id : "" ,
    name : "",
    description : "",
    price : "",
    count : 0  
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

    // const Moltin = MoltinGateway({
    //   client_id: 'XBhWG5uOk67N9EX4dSKoyrYC5JzVlPyfh6FAYFZm6i'
    // });
    
    //Moltin.Authenticate().then((response) => {
      //console.log('authenticated - yay', response);
      // eslint-disable-next-line
      // const products = Moltin.Products.With('main_image').All()
      API.GetProducts('main_image')
      .then(p => {this.setState({products: p.data, 
                                       id: p.data.id, 
                                     name: p.data.name,
                              description: p.data.description,
                                    price: p.data.price});
       })
       .catch(err => console.log('There was an error:' + err));
       console.dir(this.state.products);
     // });
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
          <div className="col-md-6" key={p.id}>
          <Product
           product={p}
           description={p.description}
           name={p.name}
           id={p.id}
           />
           </div>
         )}
        </div>
        </div>
      )
    }
  }
  
  export default Store;
  