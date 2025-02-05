import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params.productId);
  const api_url = `https://fakestoreapi.com/products/${params.productId}`;
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <div className="container">
      <div className="product-section">
        <h1>Product #{params.productId}</h1>
        <Product
          product={product}
          showDetailsBtn={false}
          className="product-section-item"
        />
      </div>
    </div>
  );
}

export default ProductDetails;
