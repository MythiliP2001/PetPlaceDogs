import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signin.css'; // Import your custom CSS for styling

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Used for redirecting after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true); // Set loading state to true while the request is processing

    try {
      const response = await axios.post('http://localhost:5000/UserRouter/signin', { email, password });
      console.log('Response from backend:', response.data);

      const { token } = response.data; // Extract the token from the response

      if (token) {
        // Store the JWT token in local storage
        localStorage.setItem('authToken', token);
        console.log('Token stored in local storage:', localStorage.getItem('authToken'));

        // Decode the token to extract user information (optional)
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Simple decoding
        console.log('Decoded Token:', decodedToken);
        const userId = decodedToken.userId;
        localStorage.setItem('userId', userId); // Store userId in localStorage

        // Redirect to home page after successful login
        alert('Login successful! Redirecting to the home page.');
        navigate('/');
      } else {
        setError('Login failed. Token not returned from server.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Login failed. Please try again or register for a new account.');
      }
    } finally {
      setLoading(false); // Set loading state to false after request completes
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="signin-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="signin-input"
        />
        <button type="submit" className="signin-button" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      {error && <p className="signin-error">{error}</p>} {/* Display error if any */}

      <div className="signin-register">
        <p>Don't have an account?</p>
        <a href="/signup" className="signin-register-link">Register here</a>
      </div>
    </div>
  );
};

export default SignIn;
