// src/Vaccines.js

import React, { useState } from 'react';

const Vaccines = () => {
  const vaccines = [
    { name: 'Rabies', date: '2024-08-20', dateToRenew: '2025-08-20', status: 'Up-to-date' },
    { name: 'Distemper', date: '2023-09-15', dateToRenew: '2024-09-15', status: 'Expired' },
    { name: 'Parvovirus', date: '2023-09-15', dateToRenew: '2024-09-15', status: 'Expired' },
  ];

  const [expandedVaccineIndex, setExpandedVaccineIndex] = useState(null); // Track which vaccine is expanded

  const toggleVaccineDetails = (index) => {
    setExpandedVaccineIndex(expandedVaccineIndex === index ? null : index); // Toggle the expanded vaccine details
  };

  return (
    <div style={styles.container}>
      <h2>Vaccines</h2>
      <ul style={styles.list}>
        {vaccines.map((vaccine, index) => (
          <li key={index} style={styles.item}>
            <div onClick={() => toggleVaccineDetails(index)} style={styles.vaccineHeader}>
              <strong>Vaccine:</strong> {vaccine.name}
              <span style={styles.toggleButton}>{expandedVaccineIndex === index ? '-' : '+'}</span>
            </div>
            {expandedVaccineIndex === index && (
              <div style={styles.details}>
                <strong>Date Taken:</strong> {vaccine.date}<br />
                <strong>Status:</strong> {vaccine.status}<br />
                <strong>Date to Renew:</strong> {vaccine.dateToRenew}
              </div>
            )}
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
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  vaccineHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    marginTop: '10px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  toggleButton: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
};

export default Vaccines;
