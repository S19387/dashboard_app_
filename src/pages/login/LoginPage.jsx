import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import Button from '../../components/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validEmail = import.meta.env.VITE_DUMMY_EMAIL;
  const validPassword = import.meta.env.VITE_DUMMY_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('authToken', 'dummy-token');
      toast.success('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials, please try again.');
      toast.error('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Login - User Dashboard</title>
        <meta name="description" content="Login to your account" />
      </Helmet>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button label="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
