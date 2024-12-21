import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
//import './CartPage.css'; // Add your cart page styling

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalAmount = cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button onClick={clearCart}>Clear Cart</button>
            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
