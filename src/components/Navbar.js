// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Tiffin Service</Link>
        <div className="flex space-x-4">
          <Link to="/cuisines" className="hover:text-green-200">Cuisines</Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:text-green-200">Profile</Link>
              <Link to="/cart" className="hover:text-green-200">Cart</Link>
              <button onClick={logout} className="hover:text-green-200">Logout</button>
            </>
          ) : (
            <Link to="/auth" className="hover:text-green-200">Login/Register</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;