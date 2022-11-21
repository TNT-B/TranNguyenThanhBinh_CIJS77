import React from "react";
import { Link } from "react-router-dom";

import { products } from "../../storage/products";
import "./style.css";

function Products(props) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((item) => {
        return (
          <Link key={item.id} to={`/products/${item.id}`}>
            <div className="product-container">
              <p>{item.title}</p>
              <b className="price">${item.price}</b>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
