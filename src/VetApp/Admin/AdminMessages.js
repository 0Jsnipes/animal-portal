// src/VetApp/AdminMessages.js

import React, { useState } from 'react';

const AdminMessages = () => {
  const [replyTo, setReplyTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  
  const messages = [
    { id: 1, from: 'patient1@example.com', subject: 'Pet feeling unwell', content: 'My pet is feeling unwell, what should I do?' },
    { id: 2, from: 'patient2@example.com', subject: 'Vaccination inquiry', content: 'Is it time for my pet’s vaccination?' },
    { id: 3, from: 'patient3@example.com', subject: 'Diet question', content: 'I have a question about my pet’s diet.' },
  ];

  const handleReply = (message) => {
    setReplyTo(message);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    // Handle reply logic here, e.g., send to API
    console.log(`Replying to ${replyTo.from}: Re: ${replyTo.subject}`, replyContent);
    setReplyTo(null);  // Clear reply state
    setReplyContent(''); // Clear reply content
  };

  return (
    <div style={styles.container}>
      <h2>Messages from Patients</h2>
      <ul style={styles.list}>
        {messages.map((message) => (
          <li key={message.id} style={styles.item}>
            <strong>From:</strong> {message.from}<br />
            <strong>Subject:</strong> {message.subject}<br />
            <strong>Message:</strong> {message.content}<br />
            <button onClick={() => handleReply(message)} style={styles.replyButton}>Reply</button>
          </li>
        ))}
      </ul>
      {replyTo && (
        <form onSubmit={handleReplySubmit} style={styles.replyForm}>
          <h3>Replying to: {replyTo.from} - Re: {replyTo.subject}</h3>
          <textarea 
            value={replyContent} 
            onChange={(e) => setReplyContent(e.target.value)} 
            rows="4" 
            placeholder="Type your reply here..." 
            required 
          />
          <button type="submit" style={styles.sendButton}>Send Reply</button>
        </form>
      )}
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
  },
  replyButton: {
    marginTop: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  replyForm: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  },
  sendButton: {
    backgroundColor: '#28A745',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default AdminMessages;
