import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../cart/cartcontext';
import "./header.css";

const Header = () => {
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">My Ecommerce Store</div>
        <div className="user-actions">
          <div className="user-links">
            <Link to="/login" className="header-link">Login</Link>
            <Link to="/register" className="header-link">Register</Link>
          </div>
          <div className="cart-info">
            <Link to="/cart" className="header-link">Cart ({cartItems.length})</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
