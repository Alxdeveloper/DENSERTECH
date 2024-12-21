import React from 'react';
import { useCart } from './CartContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();

  const totalAmount = cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity), 0);

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items to your cart before proceeding.</p>
      ) : (
        <div>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Complete Purchase</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
