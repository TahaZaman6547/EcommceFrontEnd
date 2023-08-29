import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { featuredProducts } from "../../data/data";
import { CartContext } from "../../cart/cartcontext";

const Product = () => {
  const { name } = useParams();
  const product = featuredProducts.find((product) => product.name === name);

  const cartContext = useContext(CartContext);
  const { addToCart, removeFromCart, cartItems } = cartContext;

  if (!product) {
    return <div>Product not found</div>;
  }

  const isProductInCart = cartItems.some((item) => item.name === product.name);

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>{product.name}</h1>
      <h2>Price: ${product.price}</h2>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {isProductInCart && (
      <button onClick={() => removeFromCart(product.name)}>Remove from Cart</button>
      )}
      <Link to="/cart" className="CartLink">
        View Cart ({cartItems.length})
      </Link>
    </div>
  );
};

export default Product;
