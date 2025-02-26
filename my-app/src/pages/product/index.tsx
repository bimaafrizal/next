import React, { useEffect, useState } from 'react';
type productType = {
  id: number;
  name: string;
  price: number;
};

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("/api/product")
        .then((response) => response.json())
        .then((response) => setProducts(response.data))
        .catch((error) => console.error(error));
    }, []);

    return (
      <div>
        <h1>Product Page</h1>
        <ul>
          {products.map((product: productType) => (
            <li key={product.id}>
              <div>
                {product.name} - {product.price}
              </div>
              <div></div>
            </li>
          ))}
        </ul>
      </div>
    );

};

export default ProductPage;