// src/Messages.js

import React, { useState } from 'react';

const Messages = () => {
  const veterinarians = ['Dr. Smith', 'Dr. Adams', 'Dr. Johnson']; // Sample veterinarians

  const [threads, setThreads] = useState({
    'Dr. Smith': [
      { from: 'You', subject: 'Fido’s Vaccines', content: 'Are Fido’s vaccines up to date?', time: '2024-09-26' },
    ],
    'Dr. Adams': [
      { from: 'You', subject: 'Fido’s Diet', content: 'Can you recommend a diet for Fido?', time: '2024-09-27' },
    ],
  });

  const [selectedVet, setSelectedVet] = useState(veterinarians[0]); // Initially selects the first vet
  const [showNewMessageForm, setShowNewMessageForm] = useState(false);
  const [newMessage, setNewMessage] = useState({ subject: '', content: '' });

  const handleSendMessage = () => {
    if (newMessage.subject && newMessage.content.trim()) {
      // Add the new message to the selected veterinarian's thread
      setThreads({
        ...threads,
        [selectedVet]: [
          ...(threads[selectedVet] || []),
          { from: 'You', subject: newMessage.subject, content: newMessage.content, time: new Date().toLocaleDateString() },
        ],
      });
      setNewMessage({ subject: '', content: '' });
      setShowNewMessageForm(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Messages with {selectedVet}</h2>

      {/* Dropdown to select a veterinarian */}
      <div style={styles.vetSelect}>
        <label htmlFor="vet-select">Select Veterinarian:</label>
        <select
          id="vet-select"
          value={selectedVet}
          onChange={(e) => setSelectedVet(e.target.value)}
          style={styles.select}
        >
          {veterinarians.map((vet, index) => (
            <option key={index} value={vet}>
              {vet}
            </option>
          ))}
        </select>
      </div>

      {/* Messages List */}
      <div style={styles.messageList}>
        {(threads[selectedVet] || []).map((msg, index) => (
          <div key={index} style={styles.messageItem}>
            <div style={styles.emailHeader}>
              <p><strong>From:</strong> {msg.from}</p>
              <p><strong>Subject:</strong> {msg.subject}</p>
            </div>
            <div style={styles.emailBody}>
              <p>{msg.content}</p>
              <p style={styles.time}>{msg.time}</p>
              <button onClick={()=>setShowNewMessageForm(true)} style={styles.newMessageButton}>Reply</button>
            </div>
          </div>
        ))}
      </div>

      {/* New Message Button */}
      {!showNewMessageForm && (
        <button onClick={() => setShowNewMessageForm(true)} style={styles.newMessageButton}>
          New Message
        </button>
      )}

      {/* New Message Form */}
      {showNewMessageForm && (
        <div style={styles.newMessageForm}>
          <input
            type="text"
            placeholder="Subject"
            value={newMessage.subject}
            onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
            style={styles.input}
          />
          <textarea
            placeholder="Message"
            value={newMessage.content}
            onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
            style={styles.textarea}
          />
          <button onClick={handleSendMessage} style={styles.sendButton}>Send</button>
          <button onClick={() => setShowNewMessageForm(false)} style={styles.cancelButton}>Cancel</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  vetSelect: {
    marginBottom: '20px',
  },
  select: {
    padding: '10px',
    marginLeft: '10px',
  },
  messageList: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '20px',
    maxHeight: '300px',
    overflowY: 'scroll',
  },
  messageItem: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  emailHeader: {
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
  },
  emailBody: {
    fontSize: '14px',
  },
  time: {
    fontSize: '12px',
    color: '#999',
  },
  newMessageButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  newMessageForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    minHeight: '100px',
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Messages;
