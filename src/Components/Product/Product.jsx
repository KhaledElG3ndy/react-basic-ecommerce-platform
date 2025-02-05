import { Link } from "react-router-dom";
import "./Product.css";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Product({ product, showDetailsBtn }) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    if (!cart.includes(product.id)) {
      setCart([...cart, product.id]);
    }
  };

  return (
    <div className="product">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="price">Price: {product.price}$</p>
        <div className="buttons">
          {showDetailsBtn && (
            <Link to={`/${product.id}`} className="show-details">
              Details
            </Link>
          )}
          <FaCartArrowDown className="cart-icon" onClick={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default Product;
