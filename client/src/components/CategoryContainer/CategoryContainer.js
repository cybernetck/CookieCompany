import React, {Component} from "react";
import Category from "./Category";

class CategoryContainer extends Component {

    state = {
        categorySelected: "sweet"
    }

        render() {
            return (
                <div className="categorydiv">
                {this.props.cat.map( c =>
                    <Category cat={c}/>
                    )
                }
                </div>   
            );

        }

}
    
export default CategoryContainer;