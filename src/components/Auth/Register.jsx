import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-smith-red mb-6">Smith School MBA Game</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                id="first-name"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                id="last-name"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              placeholder="your.email@umd.edu"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="team" className="block text-sm font-medium mb-1">Select Your Team</label>
            <select
              id="team"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            >
              <option value="">Select team</option>
              <option>Team Terrapins</option>
              <option>Team Ravens</option>
              <option>Team Diplomats</option>
              <option>Team Chesapeake</option>
              <option>Team Orioles</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-indigo-700 text-white py-2 rounded-md transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
