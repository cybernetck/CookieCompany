import React, { Component } from "react";
import * as API from "../../utils/moltin";
import CategoryContainer from "../../components/CategoryContainer";
import Counter from "../../components/Counter";
import ProductContainer from "../../components/Product/ProductContainer";

class Store extends React.Component {
  state = {
    products:[],
    imageIdArr:[],
    categories: [],
    cart:[],
    id : "",
    name : "",
    description : "",
    price : "",
    count : 0 
};

componentDidMount() {
  this.loadCategories();
  this.loadProducts();
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
          <ProductContainer key={this.state.id}
                        products={this.state.products}
                     imageIdArr={this.state.imageIdArr}
                        />
              </div>
        </div>
      )
    }
  }
  
  export default Store;
  