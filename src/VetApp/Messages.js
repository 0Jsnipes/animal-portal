import React, { useState } from 'react';
import styles from './MessageStyles'; // Import styles from the separate file

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

  // Send message and clear the input fields
  const handleSendMessage = () => {
    if (newMessage.subject && newMessage.content.trim()) {
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

  // Prepare to reply with a preset subject
  const handleReply = (subject) => {
    setNewMessage({ subject: `Re: ${subject}`, content: '' });
    setShowNewMessageForm(true);
  };

  // Reset the form when "Cancel" is clicked
  const handleCancel = () => {
    setNewMessage({ subject: '', content: '' });
    setShowNewMessageForm(false);
  };

  // Start a new message (reset form fields)
  const handleNewMsg = () => {
    setNewMessage({ subject: '', content: '' });
    setShowNewMessageForm(true);
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
              <button onClick={() => handleReply(msg.subject)} style={styles.replyButton}>Reply</button>
            </div>
          </div>
        ))}
      </div>

      {/* New Message Button */}
      {!showNewMessageForm && (
        <button onClick={handleNewMsg} style={styles.newMessageButton}>
          New Message
        </button>
      )}

      {/* New Message / Reply Form */}
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
          <button onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Messages;
