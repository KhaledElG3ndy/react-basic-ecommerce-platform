import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  const [id, setId] = useState();
  return (
    <div className="hero">
      <h1>Enhance Your Shopping Experience</h1>
      <p>
        Discover a seamless and convenient way to shop online, offering a wide
        range of products at your fingertips with secure payments and fast
        delivery.
      </p>
      <div className="search-bar">
        <input
          type="search"
          className="search-input"
          placeholder="Enter Product ID"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <Link className="search-btn" to={`/${id}`}>
          Search
        </Link>
      </div>
    </div>
  );
}

export default Hero;
