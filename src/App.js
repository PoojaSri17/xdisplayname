import React, { useState } from 'react';

const FullNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from reloading the page

    // Ensure both first and last name are filled
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1> {/* Ensure this text is always displayed */}
      
      {/* Display full name when available */}
      {fullName && <p>Full Name: {fullName}</p>}

      {/* Form element */}
      <form onSubmit={handleSubmit}>
        {/* First Name Input */}
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required
        />

        {/* Last Name Input */}
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required
        />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FullNameForm;
