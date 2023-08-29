import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../cart/cartcontext";
import "./cart.css";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="CartRoot">
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <div className="item-name">{item.name}</div>
        <div className="item-price">${item.price}</div>
        <div className="item-quantity">Quantity: {item.quantity}</div>
        <div className="item-total">Total: ${item.price * item.quantity}</div>
        <div className="item-actions">
          <button onClick={() => removeFromCart(item.name)}>Remove</button>
        </div>
      </div>
    </div>
  );
};
const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cartItems, removeFromCart } = cartContext;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-receipt">
      <h2>Your Order Receipt</h2>
      {cartItems.length ? (
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} removeFromCart={removeFromCart} />
          ))}
          <div className="cart-summary">
            <div className="total-label">Total:</div>
            <div className="total-amount">${totalPrice.toFixed(2)}</div>
          </div>
        </div>
      ) : (
        <div>No Items in Cart</div>
      )}
      <Link to="/" className="LinkToHome">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;

