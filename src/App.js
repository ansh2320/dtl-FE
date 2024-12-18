import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar className="sticky top-0 z-50" user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer className="sticky bottom-0 z-50" />
      </div>
    </Router>
  );
}

export default App;