// src/App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation(); // Get the current location
  let timeoutId; // Variable to hold the timeout ID

  const handleLogout = () => {
    setIsLoggedIn(false); // Update login status
    setIsAdmin(false); // Reset admin status
    clearTimeout(timeoutId); // Clear timeout on logout
    navigate('/login'); // Redirect to the login page
  };

  // Function to set session timeout
  const setSessionTimeout = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    timeoutId = setTimeout(() => {
      handleLogout(); // Log out user on session timeout
    }, 600000); // 10 minutes timeout
  };

  // Detect user activity and reset session timeout
  const handleUserActivity = () => {
    setSessionTimeout(); // Reset timeout on activity
  };

  // Effect to set up event listeners for user activity
  useEffect(() => {
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    // Set initial session timeout
    setSessionTimeout();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      clearTimeout(timeoutId); // Clear timeout on unmount
    };
  }, []);

  return (
    <div>
      {/* Conditionally render the nav only if the user is logged in */}
      {isLoggedIn && (
        <nav style={styles.nav}>
          <>
            <Link to="/" style={styles.navLink}>Profile</Link>
            <Link to="/messages" style={styles.navLink}>Messages</Link>
            <Link to="/visits" style={styles.navLink}>Visits</Link>
            <Link to="/vaccines" style={styles.navLink}>Vaccines</Link>
            <h2 style={styles.vet}>Vet Clinic of Mebane</h2>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        </nav>
      )}
      
      {/* Show login link only if not on the login page */}
      {!isLoggedIn && location.pathname !== '/login' && (
        <h2 style={styles.h2}>
          <Link to={'/login'}>Login</Link>
        </h2>
      )}

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
    padding: '0px',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    margin: '25px',
    color: 'black',
    textDecoration: 'none',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginLeft:'auto',
  },
  h2: {
    display:'flex',
    color: 'white',
    backgroundColor: 'grey',
    alignItems:'center',
    alignText:'center'
  },

vet: {
  marginLeft:'240px',
  padding:'0px'
}
};
export default App;
