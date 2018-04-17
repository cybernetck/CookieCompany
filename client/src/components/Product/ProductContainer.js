import React, {Component} from "react";
import Product from "./Product";

class ProductContainer extends Component {
    constructor(props){
        super(props);
            this.state = {
                products: this.props.products,
                imgLinkArr: this.props.imageIdArr 
            }
    }

    getImage = () => {
        // var fileId = this.state.products.relationships.main_image.data.id;
        // var file   = this.state.imageIdArr.find( img => fileId === img.id);
        console.log("inside getImage");
    }

      render() {
        return (
            <div className="row">
                {this.props.products.map((p) =>
                    <div className="col-md-6"  key={p.id} >
                        <Product products={p}/>
                </div>)}
            </div>
        );
    }
}
export default ProductContainer;

