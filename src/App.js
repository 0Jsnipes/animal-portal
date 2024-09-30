// src/App.js

import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Profile from './VetApp/Profile';
import Messages from './VetApp/Messages';
import Visits from './VetApp/Visits';
import Vaccines from './VetApp/Vaccines';
import Login from './VetApp/Login';
import AdminProfile from './VetApp/Admin/AdminProfile';
import AdminMessages from './VetApp/Admin/AdminMessages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status
  const [isAdmin, setIsAdmin] = useState(false);  // Track admin login
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate('/login');  // Redirect to login page
  };

  return (
    <div>
      <nav style={styles.nav}>
        {isLoggedIn && (
          <>
            <Link to="/" style={styles.navLink}>Profile</Link>
            <Link to="/messages" style={styles.navLink}>Messages</Link>
            <Link to="/visits" style={styles.navLink}>Visits</Link>
            <Link to="/vaccines" style={styles.navLink}>Vaccines</Link>
          </>
        )}
        {!isLoggedIn ? (
          <Link to="/login" style={styles.navLink}>Login</Link>  /* Show Login */
        ) : (
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>  /* Show Logout */
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
        <Route path="/" element={isAdmin ? <AdminProfile /> : <Profile />} />
        <Route path="/messages" element={isAdmin ? <AdminMessages /> : <Messages />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/vaccines" element={<Vaccines />} />
      </Routes>
    </div>
  );
}

const styles = {
  nav: {
    padding: '10px',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    margin: '0 15px',
    color: '#fff',
    textDecoration: 'none',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default App;
