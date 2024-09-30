// src/AdminProfile.js

import React, { useState } from 'react';

const AdminProfile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const patients = [
    {
      name: 'Fido',
      weight: '18lbs',
      age: 2,
      breed: 'Boxer',
      vaccines: [
        { name: 'Rabies', date: '2024-08-20', status: 'Up-to-date' },
        { name: 'Distemper', date: '2023-09-15', status: 'Expired' },
      ],
      visits: [
        { date: '2024-06-15', note: 'Annual checkup - everything is fine.' },
        { date: '2024-07-10', note: 'Treated for fleas.' },
      ],
    },
    // Add more patients as needed
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Admin Profile</h2>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a patient"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>
      <ul style={styles.list}>
        {filteredPatients.map((patient, index) => (
          <li key={index} style={styles.item}>
            <h3>{patient.name}</h3>
            <p><strong>Weight:</strong> {patient.weight}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Breed:</strong> {patient.breed}</p>
            <h4>Vaccines:</h4>
            <ul>
              {patient.vaccines.map((vaccine, i) => (
                <li key={i}>
                  <strong>{vaccine.name}</strong> - {vaccine.date} ({vaccine.status})
                </li>
              ))}
            </ul>
            <h4>Visits:</h4>
            <ul>
              {patient.visits.map((visit, i) => (
                <li key={i}>
                  <strong>{visit.date}</strong> - {visit.note}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  searchContainer: {
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default AdminProfile;
