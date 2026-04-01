import React, { useState } from 'react';

interface AdminLoginModalProps {
  onLogin: (email: string, password: string) => boolean;
  onBackHome: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ onLogin, onBackHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const success = onLogin(email.trim(), password.trim());
    if (!success) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-maroon">Admin Access</p>
        <h2 className="editorial-text mt-2 text-3xl font-light text-gray-900">Sign In</h2>
        <p className="mt-2 text-sm text-gray-600">Login to access the admin dashboard.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="admin-email" className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-500">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            />
          </div>
          <div>
            <label htmlFor="admin-password" className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-500">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-black transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            Login
          </button>
        </form>

        <button
          type="button"
          onClick={onBackHome}
          className="mt-3 w-full rounded-xl border border-transparent px-4 py-3 text-sm font-semibold text-gray-600 transition-all hover:bg-gray-50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AdminLoginModal;
