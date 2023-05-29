import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { useAuth } from '../AuthContext';
import { motion } from 'framer-motion';

export default function Dashboard({ children }) {
  const router = useRouter();
  const { signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }, [router, signOut]);

  const handleNavigateHome = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl text-blue-600 font-semibold">
            <Image src={'/drbelissa.png'} width={200} height={50} alt="Dr. Belissa" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleNavigateHome}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              aria-label="home"
            >
              <AiOutlineHome className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              onClick={handleSignOut}
              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
              aria-label="sign out"
            >
              <BiUser className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        className="flex-grow w-full max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-blue-600 text-center mb-8">Dashboard</h2>
        <div className="flex justify-center mb-8">
          <Link href="/dashboard/new">
            <button
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-150 ease-in-out"
            >
              Nouveau Patient
            </button>
          </Link>
        </div>
        {children}
      </motion.div>
      {isMenuOpen && (
        <div className="p-4 bg-white rounded-md shadow-md space-y-2 md:hidden">
          <button
            onClick={handleSignOut}
            className="w-full text-left block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <FiLogOut className="inline mr-2" />
            Deconnexion
          </button>
        </div>
      )}
    </div>
  );
}