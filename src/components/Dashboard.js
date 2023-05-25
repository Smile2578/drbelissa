import { useState } from 'react';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { useAuth } from '../AuthContext';
import { motion } from 'framer-motion';

export default function Dashboard({ children }) {
  const router = useRouter();
  const signOut  = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    router.push('/');
  };

  const handleNavigateHome = () => {
    router.push('/dashboard');
};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200">
      <nav className="bg-indigo-400 shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white text-2xl font-semibold">Dr. Simon Belissa</div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center">
                <div className="ml-3 relative">
    <button
        onClick={handleNavigateHome}
        className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        id="home-menu"
        aria-haspopup="true"
    >
        <AiOutlineHome className="h-6 w-6" aria-hidden="true" />
    </button>
</div>
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={handleSignOut}
                      className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <BiUser className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
              >
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <motion.div
        className="container mt-6 mx-auto px-4 py-8 max-w-5xl bg-white rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-semibold mb-8 text-indigo-300 text-center">Dashboard</h2>
        <div className="text-center mb-8">
          <Link href="/dashboard/new">
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-8 hover:bg-blue-700 focus:outline-none shadow-md transition duration-150 ease-in-out"
            >
              Nouveau Patient
            </button>
          </Link>
        </div>
        {children}
      </motion.div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={handleSignOut}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
            >
              <FiLogOut className="inline mr-2" />
              Deconnexion
            </button>
          </div>
        </div>
      )}
    </div>
  );
}




