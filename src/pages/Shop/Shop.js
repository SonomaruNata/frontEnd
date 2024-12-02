

import React from 'react';
import JuliaImages from '../../assets/images/products/productImages';

function Shop() {
  // Sample product data with image keys that correspond to the keys in JuliaImages
  const products = [
    { id: 1, name: 'product1', price: 120, image: 'product1' },
    { id: 2, name: 'product2', price: 85, image: 'product2' },
    { id: 3, name: 'product3', price: 45, image: 'product3' },
  
  ];

  return (
    <div className="container my-5">
      <h2>Shop</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img
                src={JuliaImages[product.image]}  // Access the image using JuliaImages
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
