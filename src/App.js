import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TiffinDetails from './pages/TiffinDetails';
import UserProfile from './pages/UserProfile';
import AuthPage from './pages/AuthPage';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import cuisineData from './pages/CuisineList';

function CuisineList() {
  const [cuisines, setCuisines] = useState([]);
  const [filters, setFilters] = useState({
    type: '',
    region: '',
    spiceLevel: '',
  });

  useEffect(() => {
    // Simulate filtering cuisines based on the filters
    const fetchCuisines = () => {
      const filteredCuisines = cuisineData.filter((cuisine) => {
        const matchesType = filters.type ? cuisine.type === filters.type : true;
        const matchesRegion = filters.region ? cuisine.region === filters.region : true;
        const matchesSpiceLevel = filters.spiceLevel ? cuisine.spiceLevel === filters.spiceLevel : true;
        return matchesType && matchesRegion && matchesSpiceLevel;
      });
      setCuisines(filteredCuisines);
    };

    fetchCuisines();
  }, [filters]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Local Tiffin Cuisines</h1>
      
      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <select 
          value={filters.type}
          onChange={(e) => setFilters({...filters, type: e.target.value})}
        >
          <option value="">All Types</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
        
        <select 
          value={filters.region}
          onChange={(e) => setFilters({...filters, region: e.target.value})}
        >
          <option value="">All Regions</option>
          <option value="north">North Indian</option>
          <option value="south">South Indian</option>
          <option value="west">West Indian</option>
          <option value="east">East Indian</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cuisines.map(cuisine => (
          <div key={cuisine.id} className="border p-4 rounded">
            <img src={cuisine.image} alt={cuisine.name} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold">{cuisine.name}</h2>
            <p>{cuisine.description}</p>
            <p>Price: ₹{cuisine.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar className="sticky top-0 z-50" />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cuisines" element={<CuisineList />} />
              <Route path="/tiffin/:id" element={<TiffinDetails />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer className="sticky bottom-0 z-50" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;