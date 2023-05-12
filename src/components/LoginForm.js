import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { LockClosedIcon, UserIcon } from '@heroicons/react/solid';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      onLogin();
      router.push('/dashboard');
    } else {
      setError('Ce ne sont pas les bons identifiants !');
    }
  };

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 p-8 rounded w-full sm:w-96"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      
      {error && <p className="text-red-600">{error}</p>}
      <div>
        <label htmlFor="username" className="sr-only">
          Utilisateur:
        </label>
        <div className="relative">
          <input
            type="text"
            autoComplete="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-black p-2 pl-10 border border-gray-300 rounded"
            placeholder="Utilisateur"
          />
          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Mot de Passe:
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 pl-10 text-black border border-gray-300 rounded"
            placeholder="Mot de Passe"
          />
          <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
        </div>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full p-2 bg-blue-600 text-white font-semibold rounded"
      >
        Accéder
      </motion.button>
    </motion.form>
  );
}