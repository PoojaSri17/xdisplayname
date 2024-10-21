import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '') {
      setError(true);
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(false);
      // Reset form
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div className="container">
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </div>
        {error && <p className="error">Both fields are required!</p>}
        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <div className="full-name-display">
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
