import React, { Component } from "react";
//import { gateway as MoltinGateway } from '@moltin/sdk';
import * as API from "../../utils/moltin";
import Product from "../../components/Product";
import CategoryContainer from "../../components/CategoryContainer";
import Counter from "../../components/Counter";

class Store extends React.Component {
  state = {
    products: [],
    imageIdArr:[],
    id : "" ,
    name : "",
    description : "",
    price : "",
    count : 0 ,
    categories: []
};

componentDidMount() {
  this.loadProducts();
  this.loadCategories();
  }
  
    loadProducts = () => {
      API.GetProducts()
      .then(p => {this.setState({products: p.data, 
                               imageIdArr: p.included.main_images,
                                       id: p.data.id, 
                                     name: p.data.name,
                              description: p.data.description,
                                    price: p.data.price});
       })
       .catch(err => console.log('There was an error:' + err));
    };
    
   loadCategories = () => {
     API.GetCategories()
     .then(c => {this.setState({categories: c.data});
     console.log("categories..", c);
    })
   }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

  
    render(){
      return (
        <div>
          <CategoryContainer cat={this.state.categories}/>
          <div className="row">
            {this.state.products.map( p =>
              <div className="col-md-6" key={p.id}>
                <Product
                  product={p}
                  imageIdArr={p.included}
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
  