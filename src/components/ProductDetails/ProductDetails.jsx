import React from 'react';

/**
 *
 * @param {title, description, brand} params
 * @returns
 */
function ProductDetails(params) {
  return (
    <div className="product__info_container">
      <h1>{`${params.brand} ${params.title}`}</h1>
      <p>{params.description}</p>
    </div>
  );
}

export default ProductDetails;
