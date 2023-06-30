import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineUserAdd} from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
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

  const handleExportClick = async () => {
    try {
      const res = await fetch('/api/patients/export');  
      const blob = await res.blob();

      const date = new Date();
      const dateStr = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric'}).format(date).replace(/\//g, '-');

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `patients_${dateStr}.csv`
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log('Error exporting data:', error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl text-blue-600 font-semibold flex items-center">
            <Image src={'/drbelissa.png'} width={200} height={50} alt="Dr. Belissa" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleNavigateHome}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-150 ease-in-out"
              aria-label="home"
            >
              <AiOutlineHome className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              onClick={handleSignOut}
              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-150 ease-in-out"
              aria-label="sign out"
            >
              <BiUser className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-150 ease-in-out"
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
        <div className="flex justify-center mb-8 space-x-1.5">
  <Link href="/dashboard/new">
    <button
      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition duration-150 ease-in-out"
      title="Nouveau Patient"
    >
      <AiOutlineUserAdd className="h-6 w-6" aria-hidden="true" />
    </button>
  </Link>
  <button
    onClick={handleExportClick}
    className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md transition duration-150 ease-in-out"
    title="Exporter Données"
  >
    <FaFileDownload className="h-6 w-6" aria-hidden="true" />
  </button>
</div>

        {children}
      </motion.div>
      {isMenuOpen && (
        <motion.div
          className="p-4 bg-white rounded-md shadow-md space-y-2 md:hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleSignOut}
            className="w-full text-left block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            <FiLogOut className="inline mr-2" />
            Deconnexion
          </button>
        </motion.div>
      )}
    </div>
  );
}
