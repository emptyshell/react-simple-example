import React, {useEffect, useState} from 'react';
import Product from '../../components/Product/Product';
import './store.css';

/**
 * @param
 * @return Store that contains all the products components
 */
function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((prods) => setProducts(prods.products));
  }, []);

  return (
    <section>
      {products.map((product) => (
        <Product key={`product-${product.id}`} {...product} />
      ))}
    </section>
  );
}

export default Store;
