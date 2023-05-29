import { useRouter } from 'next/router';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
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
      className="min-h-screen flex items-center justify-center bg-gray-100 background-login"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="p-10 rounded-xl shadow-lg w-full sm:w-96 bg-gray-100 backdrop-blur-md flex flex-col items-center"
        variants={childVariants}
      >
        <Image src="/drbelissa.png" alt="Dr. Simon Belissa Logo" height={50} width={150} />
        <div className='mt-4 mb-4 text-black'>
        <Typewriter
  options={{
    strings: ['Bienvenue. Merci de vous identifier.'],
    autoStart: true,
    loop: false,
  }}
        />
        </div>
        <LoginForm onLogin={handleLogin} />
      </motion.div>
    </motion.div>
  );
}
