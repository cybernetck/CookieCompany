import React from 'react';

const ProductImage = props => {
  let file;
  let fileId;
  let placeholder =
    'http://via.placeholder.com/200x150';

 console.log("Inside of ProductImage. Here's props...", props)
  var isThereAMainImage = product => {
    fileId = props.product.relationships.main_image.data.id;
     {console.log("FileId , and file location", fileId, props.products.included.main_images)}
   
    file = props.products.included.main_images.find(function(el) {
   
      return fileId === el.id;
    });
     
    return (
      (
        <img
          alt={props.product.name + '-' + props.product.description}
          src={file.link.href}
          style={{ background: props.background }}
        />
      ) || <img alt="placeholder" src={placeholder} />
    );
  };

  var isThereAFile = product => {
    try {
      fileId = props.product.relationships.files.data[0].id;
      file = props.products.included.files.find(function(el) {
        return fileId === el.id;
      });
      return (
        <img
          alt={props.product.name + ', ' + props.product.description}
          src={file.link.href}
          style={{ background: props.background }}
        />
      );
    } catch (e) {
      return <img alt="placeholder" src={placeholder} />;
    }
  };

  try {
    /* debug */
   // console.log("props description", props.product.description);
    return isThereAMainImage(props.product);
  } catch (e) {
    return isThereAFile(props.product);
  }
};

export default ProductImage;