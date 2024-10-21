import React, { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!firstName || !lastName) {
      setError('Both fields are required'); // Set error if fields are empty
      setFullName(''); // Clear full name display
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(''); // Clear error if form is successfully submitted
    }
  };

  return (
    <div>
      <h1>Enter Your Full Name</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p id="error-message" style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      {fullName && <p id="full-name-display">Full Name: {fullName}</p>} {/* Display full name if available */}
    </div>
  );
};

export default App;
