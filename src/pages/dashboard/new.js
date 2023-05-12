import { ProtectedRoute } from '../../components/ProtectedRoute';
import { useAuth } from '../../AuthContext';
import PatientForm from '../../components/PatientForm';
import { useRouter } from 'next/router';

export default function NewPatient() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const savePatient = async (patient) => {
    try {
        const response = await fetch('/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patient),
        });
        if (!response.ok) {
            throw new Error('Error creating patient');
        }
        const data = await response.json();
        router.push(`/dashboard`);
    } catch (error) {
        console.error('Error saving patient:', error);
    }   
    };
    
  const onCancelClick = () => {
    router.push('/dashboard');
    };

  

    return (
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <div className="min-h-screen bg-gray-100">
          <PatientForm isNew onCancel={onCancelClick} onSubmit={savePatient} />
        </div>
      </ProtectedRoute>
    );
}
