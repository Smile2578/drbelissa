import PatientForm from './PatientForm';

const PatientFormWrapper = ({ patientData, onCancel, onSubmit, setIsFormOpen }) => {
  const handleCancel = () => {
    setIsFormOpen(false);
    if (onCancel) onCancel();
  };

  const handleSubmit = (data) => {
    setIsFormOpen(false);
    if (onSubmit) onSubmit(data);
  };

  return (
    <div>
      {patientData ? (
        <PatientForm 
          {...patientData} 
          onCancel={handleCancel} 
          onSubmit={handleSubmit} 
        />
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default PatientFormWrapper;
