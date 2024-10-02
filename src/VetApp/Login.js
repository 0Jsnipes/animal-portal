// src/VetApp/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginStyles'; // Import the styles from a separate file

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const adminCredentials = {
    email: 'admin@example.com',
    password: 'adminpassword',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (email === adminCredentials.email && password === adminCredentials.password) {
      setIsAdmin(true);  // Set as admin
      setIsLoggedIn(true);  // Set as logged in
      navigate('/admin');  // Navigate to admin profile
    } else {
      setIsAdmin(false);  // Set as regular user
      setIsLoggedIn(true);  // Set as logged in
      navigate('/');  // Navigate to user profile
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Vet Portal</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
