// Profile.js

import React from 'react';
 // Import the CSS file for styling

const Profile = () => {
  const animal = {
    name: 'Fido',
    weight: '18lbs',
    age: 2,
    breed: 'Boxer',
    image: 'https://via.placeholder.com/150', // Replace this with actual image URL
  };

  return (
    <div style={styles.container}>
      {/* Top Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Messages</li>
          <li style={styles.navItem}>Visits</li>
          <li style={styles.navItem}>Vaccines</li>
        </ul>
      </nav>

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
  nav: {
    width: '100%',
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '18px',
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
};

export default Profile;
