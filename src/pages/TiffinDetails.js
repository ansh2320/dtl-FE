// src/pages/TiffinDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TiffinDetails() {
  const { id } = useParams();
  const [tiffin, setTiffin] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchTiffinDetails = async () => {
      try {
        const response = await fetch(`/api/tiffin/${id}`);
        const data = await response.json();
        setTiffin(data);
      } catch (error) {
        console.error('Error fetching tiffin details:', error);
      }
    };

    fetchTiffinDetails();
  }, [id]);

  const handleAddToCart = () => {
    // Implement add to cart logic
  };

  if (!tiffin) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <img 
          src={tiffin.image} 
          alt={tiffin.name} 
          className="w-full h-96 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{tiffin.name}</h1>
          <p className="text-gray-600 mb-4">{tiffin.description}</p>
          <div className="mb-4">
            <span className="font-bold">Cuisine Type:</span> {tiffin.cuisineType}
            <span className="ml-4 font-bold">Region:</span> {tiffin.region}
          </div>
          <p className="text-2xl font-bold text-green-600 mb-4">
            ₹{tiffin.price}
          </p>
          <div className="flex items-center mb-4">
            <label className="mr-4">Quantity:</label>
            <input 
              type="number" 
              min="1" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 p-2 border rounded"
            />
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default TiffinDetails;