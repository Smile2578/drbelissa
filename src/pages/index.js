import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../AuthContext';
import { motion } from 'framer-motion';

export default function Index() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleLogin = () => {
    setIsLoggedIn(true);
    router.push('/dashboard');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`min-h-screen flex items-center justify-center bg-gray-100 background-login`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="p-10 rounded-xl shadow-lg w-full sm:w-96 bg-white bg-opacity-90 backdrop-blur-md flex flex-col items-center"
        variants={childVariants}
      >
        <h2 className="text-black mb-6 text-center font-semibold text-xl flex items-center justify-center space-x-3">
          <span>Bienvenue Dr. Belissa !</span>
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Merci de vous identifier.
        </p>
        <LoginForm onLogin={handleLogin} />
      </motion.div>
    </motion.div>
  );
}