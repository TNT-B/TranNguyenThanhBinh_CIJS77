import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../storage/products";

function Product(props) {
  const params = useParams();
  console.log(products)
  let found = products.find( item => item.id.toString() === params.id);

  if (!found) {
    return <div>Not found product</div>
  }

  return (
    <div className="productStyle">
      <p className="id">Product {params.id}</p>
      <img className="image" src={found.image} alt="picture"/>
      <p className="title">{found.title}</p>
      <p className="priceStyle">${found.price}</p>
    </div>
    );
}

export default Product;
