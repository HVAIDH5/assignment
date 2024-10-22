import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, UserPlus } from 'lucide-react';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '', confirmPassword: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform registration logic here
      console.log('Registration successful');
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border rounded-md pl-10 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-2 border rounded-md pl-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-2 border rounded-md pl-10 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;