// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cuisineData from './CuisineList';
import SushiPic from '../images/image_sushi.jpg'
import ButterChickenPic from '../images/image_butterchicken.jpeg'
import TacoPic from '../images/image_taco.jpg'
function Home() {

  return (
    <div className="container mx-auto p-4 ">
      <section className="hero bg-green-100 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Fresh Homemade Tiffins</h1>
        <p className="text-xl mb-6">Discover delicious meals from local home cooks</p>
        <Link 
          to="/cuisines" 
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
        >
          Explore Cuisines
        </Link>
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
                <Link 
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;