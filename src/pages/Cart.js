// src/pages/Cart.js
import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data.items);
        setTotal(data.total);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (itemId) => {
    try {
      await fetch(`/api/cart/remove/${itemId}`, { method: 'DELETE' });
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      await fetch(`/api/cart/update/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
      });
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', { method: 'POST' });
      const data = await response.json();
      // Handle payment or redirect
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-20 p-2 border rounded mr-4"
                />
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
            <button 
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-3 rounded mt-4 hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;