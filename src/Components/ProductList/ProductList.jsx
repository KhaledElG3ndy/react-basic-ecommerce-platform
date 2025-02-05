import "./ProductList.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getAllCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductsByCategory = (category) => {
    console.log(category);

    fetch(`${api_url}/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getAllCategories();
  }, []);
  return (
    <>
      <div className="category-list">
        <button className="category-item">ALL</button>
        {categories.map((item) => {
          return (
            <button
              key={item}
              className="category-item"
              onClick={() => getProductsByCategory(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="product-list">
        <h2>Our Products</h2>
        <div className="container">
          {products.map((item) => {
            return (
              <div className="product-item">
                <Product product={item} showDetailsBtn={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
