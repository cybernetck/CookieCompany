import React, {Component} from "react";
import Product from "./Product";

class ProductContainer extends Component {
    state = {
        products: this.props.products,
        imageIdArr: this.props.imageIdArr,
        imgLinkArr:[]
    }

    getImage = () => {
        let fileId = this.state.props.product.relationships.main_image.data.id;
        let file  = this.state.imageIdArr.find(function(img){
           if (fileId === img.id){
        console.log("fileID inside of getImage...", fileId);
          this.setState({imgLinkArr: file});
           }
      })
    }
    componentDidMount() {
        ;
        this.setState({
            imgLinkArr: this.getImage
        })
        console.log("imageSetter");
    }

      render() {
        return (
            <div className="row">
                {this.state.products.map((p,index) =>
                    <div className="col-md-6"  key={index} >
                        <Product products={p}/>
                    </div>)}
            </div>
        );
    }
}
export default ProductContainer;

