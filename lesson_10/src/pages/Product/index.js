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
    <div>
      <p>Product {params.id}</p>
      <p>{found.title}</p>
      <p><image><a ></a></image></p>
    </div>
    );
}

export default Product;
