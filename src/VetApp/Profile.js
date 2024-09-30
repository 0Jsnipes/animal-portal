// src/Profile.js

import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const animal = {
    name: 'Fido',
    weight: '18lbs',
    age: 2,
    breed: 'Boxer',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  };

  return (
    <div style={styles.container}>
      {/* Animal Profile */}
      <div style={styles.profile}>
        <div style={styles.profileImage}>
          <img src={animal.image} alt={animal.name} style={styles.image} />
        </div>

        {/* Animal Information */}
        <div style={styles.info}>
          <h2>{animal.name}</h2>
          <p><strong>Weight:</strong> {animal.weight}</p>
          <p><strong>Age:</strong> {animal.age} years</p>
          <p><strong>Breed:</strong> {animal.breed}</p>
        </div>
      </div>
    </div>
  );
};

// Styles for the Profile page
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  profile: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
    marginTop: '20px',
  },
  profileImage: {
    marginBottom: '15px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  info: {
    fontSize: '16px',
  },
  navigation: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  navLink: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    textDecoration: 'none',
  },
};

export default Profile;
