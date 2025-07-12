import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';  // To navigate after login
import Button from '../../components/Button';
import InputField from '../../components/InputField';  // You can make this a reusable input field component

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  // Simulate token-based login
  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating credentials
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      // Simulate storing a token in localStorage after successful login
      localStorage.setItem('authToken', 'dummy-token');
      history.push('/dashboard');  // Redirect to dashboard after login
    } else {
      setError('Invalid credentials! Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <InputField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
