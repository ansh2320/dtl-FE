// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-green-800 text-white p-8 mt-8">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Tiffin Service</h3>
          <p>Fresh, homemade meals delivered to your doorstep</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p>Email: support@tiffinservicetest.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
          </div>
        </div>
      </div>
      <div className='text-center mt-8 border-t border-green-700 pt-4'>
        Made by Anant Ahlawat, Aditya Rukmangad, Dhruv Dhankher
      </div>
      <div className="text-center mt-8 border-t border-green-700 pt-4">
        © 2024 Tiffin Service. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;