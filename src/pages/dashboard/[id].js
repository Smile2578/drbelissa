import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { useAuth } from '../../AuthContext';
import PatientFormWrapper from '../../components/PatientFormWrapper';
import Dashboard from '../../components/Dashboard';

export default function EditPatient() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [patientData, setPatientData] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(true); // Add this state

  const fetchPatientData = async (patientId) => {
    try {
      const response = await fetch(`/api/patients/${patientId}`);
      if (!response.ok) {
        throw new Error('Error fetching patient data');
      }
      const data = await response.json();
      return data.patient;
    } catch (error) {
      console.error('Error fetching patient data:', error);
      return null;
    }
  };

  useEffect(() => {
    if (id) {
      fetchPatientData(id).then((data) => {
        setPatientData(data);
      });
    }
  }, [id]);

  const handleCancel = () => {
    setIsFormOpen(false); 
    router.push('/dashboard');
  };

  const handleUpdate = async (updatedData) => {
    try {
      const response = await fetch(`/api/patients/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`Error updating patient: ${response.status}`);
      }

      // Refresh the patient data
      setPatientData(updatedData);
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error updating patient:', error.message);
    }
  };
  useEffect(() => {
    if (!isFormOpen) {
      router.push('/dashboard');
    }
  }, [isFormOpen]);

  return (
    <ProtectedRoute isLoggedIn={isLoggedIn}>
      <Dashboard>
        {isFormOpen && patientData && (
          <PatientFormWrapper
            patientData={patientData}
            onSubmit={handleUpdate}
            onCancel={handleCancel}
            setIsFormOpen={setIsFormOpen} 
          />
        )}
      </Dashboard>
    </ProtectedRoute>
  );
}
