import React, { useState } from 'react';

const FullNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input: both fields must be filled
    if (!firstName || !lastName) {
      setError('Both fields are required');
      setFullName(''); // Reset full name if there's an error
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(''); // Clear any errors
    }
  };

  return (
    <div>
      <h1>Enter Your Full Name</h1>

      <form id="full-name-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display error message if form is incomplete */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the full name if it's provided */}
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default FullNameForm;
