import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      const { username, role } = response.data;

      // Save user information to localStorage
      localStorage.setItem('user', JSON.stringify({ username, role }));

      // Navigate to admin dashboard or homepage based on role
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;


