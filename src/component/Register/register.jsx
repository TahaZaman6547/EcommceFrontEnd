import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setRegistrationMessage('Registration successful. You can now log in.');
      } else {
        const data = await response.json();
        setRegistrationMessage(data.error);
      }
    } catch (error) {
    
      setRegistrationMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Register</button>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default Register;
