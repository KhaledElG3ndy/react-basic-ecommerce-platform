import Header from "./Components/Header/Header";
import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductList />
              </>
            }
          />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
