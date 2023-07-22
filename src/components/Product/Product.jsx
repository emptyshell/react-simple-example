import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './product.css';

/**
 *  - required product details from api
 * @return Product definition
 */
function Product({
  title,
  description,
  price,
  discountPercentage,
  stock,
  brand,
  thumbnail,
}) {
  return (
    <div className="product">
      <div className="product__image">
        <img width={150} height={150} src={thumbnail}></img>
        <div>
          <p>Stock: {stock}</p>
          <p>Price: {price}</p>
        </div>
        <p>Discount: {discountPercentage}</p>
      </div>
      <ProductDetails title={title} description={description} brand={brand} />
    </div>
  );
}

export default Product;
