import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cuisineData from './CuisineList';

function Home() {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);
  // State to control cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart function
  const addToCart = (cuisine) => {
    // Check if item is already in cart
    const existingCartItem = cartItems.find(item => item.id === cuisine.id);

    if (existingCartItem) {
      // If item exists, increase quantity
      setCartItems(cartItems.map(item => 
        item.id === cuisine.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // If item is not in cart, add with quantity 1
      setCartItems([...cartItems, { ...cuisine, quantity: 1 }]);
    }

    // Open the cart when an item is added
    setIsCartOpen(true);
  };

  // Remove from cart function
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Update quantity function
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    } else {
      removeFromCart(itemId);
    }
  };

  // Calculate total cart value
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 relative">
      <section className="hero bg-green-100 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Fresh Homemade Tiffins</h1>
        <p className="text-xl mb-6">Discover delicious meals from local home cooks</p>
      </section>

      <section className="featured-cuisines mt-8">
        <h2 className="text-2xl font-bold mb-4">Featured Tiffins</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cuisineData.map(cuisine => (
            <div key={cuisine.id} className="border p-4 rounded">
              <img 
                src={cuisine.image} 
                alt={cuisine.name} 
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{cuisine.name}</h3>
              <p className="text-gray-600">{cuisine.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-bold">₹{cuisine.price}</span>
                <button 
                  onClick={() => addToCart(cuisine)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-red-500 hover:text-red-700"
            >
              Close
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="border-b py-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <button 
                  className="w-full bg-green-600 text-white py-3 rounded mt-4 hover:bg-green-700"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
