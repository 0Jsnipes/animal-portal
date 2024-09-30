// src/Visits.js

import React, { useState } from 'react';

const Visits = () => {
  const visits = [
    { date: '2024-06-15', note: 'Annual checkup - everything is fine.' },
    { date: '2024-07-10', note: 'Treated for fleas.' },
    { date: '2024-08-20', note: 'Vaccination booster - rabies.' },
  ];

  const [expandedVisitIndex, setExpandedVisitIndex] = useState(null); // Track which visit is expanded

  const toggleVisitNote = (index) => {
    setExpandedVisitIndex(expandedVisitIndex === index ? null : index); // Toggle the expanded visit
  };

  return (
    <div style={styles.container}>
      <h2>Past Visits</h2>
      <ul style={styles.list}>
        {visits.map((visit, index) => (
          <li key={index} style={styles.item}>
            <div onClick={() => toggleVisitNote(index)} style={styles.visitHeader}>
              <strong>Date:</strong> {visit.date}
              <span style={styles.toggleButton}>{expandedVisitIndex === index ? '-' : '+'}</span>
            </div>
            {expandedVisitIndex === index && (
              <div style={styles.note}>
                <strong>Note:</strong> {visit.note}
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
  visitHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  note: {
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

export default Visits;
