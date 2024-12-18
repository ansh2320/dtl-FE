// src/pages/UserProfile.js
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

function UserProfile() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const ordersResponse = await fetch('/api/user/orders');
        const ordersData = await ordersResponse.json();
        setOrders(ordersData);

        const profileResponse = await fetch('/api/user/profile');
        const profileData = await profileResponse.json();
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)
      });
      // Handle response
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <form onSubmit={handleProfileUpdate}>
            <input
              type="text"
              placeholder="Name"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={profile.email}
              onChange={(e) => setProfile({...profile, email: e.target.value})}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              placeholder="Address"
              value={profile.address}
              onChange={(e) => setProfile({...profile, address: e.target.value})}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={profile.phone}
              onChange={(e) => setProfile({...profile, phone: e.target.value})}
              className="w-full p-2 mb-4 border rounded"
            />
            <button 
              type="submit" 
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              Update Profile
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">My Orders</h2>
          {orders.map(order => (
            <div key={order.id} className="border p-4 mb-4 rounded">
              <p>Order ID: {order.id}</p>
              <p>Tiffin: {order.tiffinName}</p>
              <p>Total: ₹{order.totalPrice}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;