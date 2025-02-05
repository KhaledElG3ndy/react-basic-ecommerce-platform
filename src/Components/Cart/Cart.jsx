import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext";
import Product from "../Product/Product";

function Cart() {
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  useEffect(() => {
    cart.forEach((id) => {
      fetch(`${api_url}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts((prevProducts) => [...prevProducts, data]);
        });
    });
  }, [cart]);

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <div className="container">
        {products.map((item) => (
          <div key={item.id} className="product-item">
            <Product product={item} showDetailsBtn={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
