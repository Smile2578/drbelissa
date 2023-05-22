import { ProtectedRoute } from '../../components/ProtectedRoute';
import { useAuth } from '../../AuthContext';
import Dashboard from '../../components/Dashboard';
import { motion } from 'framer-motion';
import PatientList from '../../components/PatientList';

export default function DashboardPage() {
  const { isLoggedIn } = useAuth();



  const fadeInVariants = {
    hidden: { opacity: 0},
    visible: {      
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, duration: 1 },
    },
  };

  return (
    <ProtectedRoute isLoggedIn={isLoggedIn}>
      <div className="min-h-screen bg-gray-100 relative overflow-hidden">
        <motion.div
          className="relative"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <Dashboard>
          <PatientList />
          </Dashboard>
        </motion.div>
      </div>
    </ProtectedRoute>
  );
}
